import path from 'node:path';
import process from 'node:process';
import fs from 'fs-extra';
import { defaultLocale, f, supportedLocales, t } from './locales';
import { loadQuizes, resolveInfo } from './loader';
import { toAnswerShort, toNearborREADME, toPlayShort, toQuizREADME, toSolutionsShort } from './toUrl';
const DifficultyColors = {
    warm: 'teal',
    easy: '7aad0c',
    medium: 'd9901a',
    hard: 'de3d37',
    extreme: 'b11b8d',
};
const DifficultyRank = [
    'warm',
    'easy',
    'medium',
    'hard',
    'extreme',
];
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
function toBadgeURL(label, text, color, args = '') {
    return `https://img.shields.io/badge/${encodeURIComponent(label.replace(/-/g, '--'))}-${encodeURIComponent(text.replace(/-/g, '--'))}-${color}${args}`;
}
function toBadge(label, text, color, args = '') {
    return `<img src="${toBadgeURL(label, text, color, args)}" alt="${text}"/>`;
}
export function toBadgeLink(url, label, text, color, args = '') {
    return `<a href="${url}" target="_blank">${toBadge(label, text, color, args)}</a> `;
}
export function toPlanTextLink(url, _label, text, _color, _args = '') {
    return `<a href="${url}" target="_blank">${text}</a> `;
}
function toAuthorInfo(author = {}) {
    return `by ${author.name}${author.github ? ` <a href="https://github.com/${author.github}" target="_blank">@${author.github}</a>` : ''}`;
}
function toDifficultyBadge(difficulty, locale) {
    return toBadge('', t(locale, `difficulty.${difficulty}`), DifficultyColors[difficulty]);
}
function toDifficultyBadgeInverted(difficulty, locale, count) {
    return toBadge(t(locale, `difficulty.${difficulty}`), count.toString(), DifficultyColors[difficulty]);
}
function toDifficultyPlainText(difficulty, locale, count) {
    return `${t(locale, `difficulty.${difficulty}`)} (${count.toString()})`;
}
function toDetailsInnerText(text, locale) {
    return `${t(locale, `details.${text}`)}`;
}
function quizToBadge(quiz, locale, absolute = false, badge = true) {
    var _a, _b;
    const fn = badge ? toBadgeLink : toPlanTextLink;
    return fn(toQuizREADME(quiz, locale, absolute), '', `${quiz.no}・${((_a = quiz.info[locale]) === null || _a === void 0 ? void 0 : _a.title) || ((_b = quiz.info[defaultLocale]) === null || _b === void 0 ? void 0 : _b.title)}`, DifficultyColors[quiz.difficulty]);
}
function quizNoToBadges(ids, quizes, locale, absolute = false) {
    return ids
        .map(i => quizes.find(q => q.no === Number(i)))
        .filter(Boolean)
        .map(i => quizToBadge(i, locale, absolute))
        .join(' ');
}
function getAllTags(quizes, locale) {
    const set = new Set();
    for (const quiz of quizes) {
        const info = resolveInfo(quiz, locale);
        for (const tag of ((info === null || info === void 0 ? void 0 : info.tags) || []))
            set.add(tag);
    }
    return Array.from(set).sort();
}
function getQuizesByTag(quizes, locale, tag) {
    return quizes.filter((quiz) => {
        var _a;
        const info = resolveInfo(quiz, locale);
        return !!((_a = info.tags) === null || _a === void 0 ? void 0 : _a.includes(tag));
    });
}
async function insertInfoReadme(filepath, quiz, locale, quizes) {
    if (!fs.existsSync(filepath))
        return;
    let text = await fs.readFile(filepath, 'utf-8');
    /* eslint-disable prefer-template */
    if (!text.match(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/))
        text = `<!--info-header-start--><!--info-header-end-->\n\n${text}`;
    if (!text.match(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/))
        text = `${text}\n\n<!--info-footer-start--><!--info-footer-end-->`;
    const info = resolveInfo(quiz, locale);
    const availableLocales = supportedLocales.filter(l => l !== locale).filter(l => !!quiz.readme[l]);
    text = text
        .replace(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/, '<!--info-header-start-->'
        + `<h1>${escapeHtml(info.title || '')} ${toDifficultyBadge(quiz.difficulty, locale)} ${(info.tags || []).map(i => toBadge('', `#${i}`, '999')).join(' ')}</h1>`
        + `<blockquote><p>${toAuthorInfo(info.author)}</p></blockquote>`
        + '<p>'
        + toBadgeLink(toPlayShort(quiz.no, locale), '', t(locale, 'badge.take-the-challenge'), '3178c6', '?logo=typescript&logoColor=white')
        + (availableLocales.length ? ('&nbsp;&nbsp;&nbsp;' + availableLocales.map(l => toBadgeLink(toNearborREADME(quiz, l), '', t(l, 'display'), 'gray')).join(' ')) : '')
        + '</p>'
        + '<!--info-header-end-->')
        .replace(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/, '<!--info-footer-start--><br>'
        + toBadgeLink(`../../${f('README', locale, 'md')}`, '', t(locale, 'badge.back'), 'grey')
        + toBadgeLink(toAnswerShort(quiz.no, locale), '', t(locale, 'badge.share-your-solutions'), 'teal')
        + toBadgeLink(toSolutionsShort(quiz.no), '', t(locale, 'badge.checkout-solutions'), 'de5a77', '?logo=awesome-lists&logoColor=white')
        + (Array.isArray(info.related) && info.related.length ? `<hr><h3>${t(locale, 'readme.related-challenges')}</h3>${quizNoToBadges(info.related, quizes, locale, true)}` : '')
        + '<!--info-footer-end-->');
    /* eslint-enable prefer-template */
    await fs.writeFile(filepath, text, 'utf-8');
}
async function updateIndexREADME(quizes) {
    // update index README
    for (const locale of supportedLocales) {
        const filepath = path.resolve(__dirname, '..', f('README', locale, 'md'));
        let challengesREADME = '';
        let prev = '';
        // difficulty
        const quizesByDifficulty = [...quizes].sort((a, b) => DifficultyRank.indexOf(a.difficulty) - DifficultyRank.indexOf(b.difficulty));
        for (const quiz of quizesByDifficulty) {
            if (prev !== quiz.difficulty)
                challengesREADME += `${prev ? '<br><br>' : ''}${toDifficultyBadgeInverted(quiz.difficulty, locale, quizesByDifficulty.filter(q => q.difficulty === quiz.difficulty).length)}<br>`;
            challengesREADME += quizToBadge(quiz, locale);
            prev = quiz.difficulty;
        }
        // by tags
        challengesREADME += `<br><details><summary>${toDetailsInnerText('by-tags', locale)}</summary><br><table><tbody>`;
        const tags = getAllTags(quizes, locale);
        for (const tag of tags) {
            challengesREADME += `<tr><td>${toBadge('', `#${tag}`, '999')}</td><td>`;
            getQuizesByTag(quizesByDifficulty, locale, tag)
                .forEach((quiz) => {
                challengesREADME += quizToBadge(quiz, locale);
            });
            challengesREADME += '</td></tr>';
        }
        challengesREADME += '<tr><td><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code></td><td></td></tr>';
        challengesREADME += '</tbody></table></details>';
        // by plain text
        prev = '';
        challengesREADME += `<br><details><summary>${toDetailsInnerText('by-plain-text', locale)}</summary><br>`;
        for (const quiz of quizesByDifficulty) {
            if (prev !== quiz.difficulty)
                challengesREADME += `${prev ? '</ul>' : ''}<h3>${toDifficultyPlainText(quiz.difficulty, locale, quizesByDifficulty.filter(q => q.difficulty === quiz.difficulty).length)}</h3><ul>`;
            challengesREADME += `<li>${quizToBadge(quiz, locale, false, false)}</li>`;
            prev = quiz.difficulty;
        }
        challengesREADME += '</ul></details><br>';
        let readme = await fs.readFile(filepath, 'utf-8');
        readme = readme.replace(/<!--challenges-start-->[\s\S]*<!--challenges-end-->/m, `<!--challenges-start-->\n${challengesREADME}\n<!--challenges-end-->`);
        await fs.writeFile(filepath, readme, 'utf-8');
    }
}
async function updateQuestionsREADME(quizes) {
    const questionsDir = path.resolve(__dirname, '../questions');
    // update each questions' readme
    for (const quiz of quizes) {
        for (const locale of supportedLocales) {
            await insertInfoReadme(path.join(questionsDir, quiz.path, f('README', locale, 'md')), quiz, locale, quizes);
        }
    }
}
export async function updateREADMEs(type) {
    const quizes = await loadQuizes();
    quizes.sort((a, b) => a.no - b.no);
    if (type === 'quiz') {
        await updateQuestionsREADME(quizes);
    }
    else if (type === 'index') {
        await updateIndexREADME(quizes);
    }
    else {
        await Promise.all([
            updateIndexREADME(quizes),
            updateQuestionsREADME(quizes),
        ]);
    }
}
updateREADMEs(process.argv.slice(2)[0]);
