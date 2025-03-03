import path from 'node:path';
import fs from 'fs-extra';
import { translate } from '@vitalets/google-translate-api';
import { QUIZ_ROOT, loadQuizByNo, loadQuizes } from './loader';
import { resolveFilePath } from './utils/resolve';
import { t } from './locales';
export async function translateQuizByNo(no, from, to) {
    const quiz = await loadQuizByNo(no);
    if (!quiz)
        throw new Error(`Quiz #${no} not founded`);
    return await translateQuiz(quiz, from, to);
}
export async function translateQuiz(quiz, from, to) {
    let translatedReadme = await translateMarkdown(quiz.readme[from], from, to);
    if (!translatedReadme)
        throw new Error(`Quiz #${quiz.no} empty translation`);
    translatedReadme = `> ${t(to, 'readme.google-translated')}\n\n${translatedReadme.trim()}`;
    const readmePath = resolveFilePath(path.join(QUIZ_ROOT, quiz.path), 'README', 'md', to);
    await fs.writeFile(readmePath, translatedReadme, 'utf-8');
    console.log(`Translated [${quiz.no}] ${from} → ${to} | saved to ${readmePath}`);
}
export async function translateMarkdown(code, from, to) {
    // to replace the code blocks intro a placeholder then feed it into translator
    // then replace back for the results
    const codeBlocks = [];
    const source = code
        .replace(/```[\s\S\n]+?```/g, (v) => {
        const placeholder = `__${codeBlocks.length}__`;
        codeBlocks.push(v);
        return placeholder;
    })
        .replace(/`[\s\S\n]+?`/g, (v) => {
        const placeholder = `__${codeBlocks.length}__`;
        codeBlocks.push(v);
        return placeholder;
    });
    const { text } = await translate(source, {
        from,
        to,
    });
    if (!text)
        return;
    const result = text
        .replace(/__\s*?(\d+?)\s*?__/g, (_, i) => codeBlocks[+i]);
    return result;
}
export async function translateAllQuizes(from, to) {
    const quizes = await loadQuizes();
    for (const quiz of quizes) {
        if (quiz.readme[to] || !quiz.readme[from]) {
            console.log(`Skipped #${quiz.no}`);
            continue;
        }
        console.log(`Translating #${quiz.no} to ${to}`);
        await translateQuiz(quiz, from, to);
    }
}
