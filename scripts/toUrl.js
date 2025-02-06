import lzs from 'lz-string';
import { defaultLocale } from './locales';
import { resolveInfo } from './loader';
export const REPO = 'https://github.com/type-challenges/type-challenges';
export const DOMAIN = 'https://tsch.js.org';
export const TYPESCRIPT_PLAYGROUND = 'https://www.typescriptlang.org/play';
// https://github.com/microsoft/TypeScript-Website/tree/v2/packages/playground
export function toPlaygroundUrl(code, config = {}, site = TYPESCRIPT_PLAYGROUND) {
    return `${site}?${Object.entries(config).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}#code/${lzs.compressToEncodedURIComponent(code)}`;
}
export function toSolutionsFull(no) {
    return `${REPO}/issues?q=label%3A${no}+label%3Aanswer+sort%3Areactions-%2B1-desc`;
}
export function toQuizREADME(quiz, locale, absolute = false) {
    const prefix = absolute ? `${REPO}/blob/main` : '.';
    return locale && locale !== defaultLocale && quiz.readme[locale]
        ? `${prefix}/questions/${quiz.path}/README.${locale}.md`
        : `${prefix}/questions/${quiz.path}/README.md`;
}
export function toRawREADME(quiz, locale) {
    const provider = 'https://cdn.jsdelivr.net/gh/type-challenges/type-challenges';
    // const provider = 'https://raw.githubusercontent.com/type-challenges/type-challenges/main'
    return locale && locale !== defaultLocale && quiz.readme[locale]
        ? `${provider}/questions/${quiz.path}/README.${locale}.md`
        : `${provider}/questions/${quiz.path}/README.md`;
}
export function toQuestionsRawREADME(locale) {
    const provider = 'https://cdn.jsdelivr.net/gh/type-challenges/type-challenges';
    return locale && locale !== defaultLocale ? `${provider}/README.${locale}.md` : `${provider}/README.md`;
}
export function toNearborREADME(quiz, locale) {
    return locale && locale !== defaultLocale && quiz.readme[locale]
        ? `./README.${locale}.md`
        : './README.md';
}
export function toShareAnswerFull(quiz, locale = defaultLocale) {
    const info = resolveInfo(quiz, locale);
    if (locale === defaultLocale)
        return `https://github.com/type-challenges/type-challenges/issues/new?labels=answer,${encodeURIComponent(locale)}&template=0-answer.md&title=${encodeURIComponent(`${quiz.no} - ${info.title}`)}`;
    else
        return `https://github.com/type-challenges/type-challenges/issues/new?labels=answer,${encodeURIComponent(locale)}&template=1-answer.${locale}.md&title=${encodeURIComponent(`${quiz.no} - ${info.title}`)}`;
}
// Short
export function toReadmeShort(no, locale) {
    return locale !== defaultLocale
        ? `${DOMAIN}/${no}/${locale}`
        : `${DOMAIN}/${no}`;
}
export function toSolutionsShort(no) {
    return `${DOMAIN}/${no}/solutions`;
}
export function toPlayShort(no, locale) {
    return locale !== defaultLocale
        ? `${DOMAIN}/${no}/play/${locale}`
        : `${DOMAIN}/${no}/play`;
}
export function toAnswerShort(no, locale) {
    return locale !== defaultLocale
        ? `${DOMAIN}/${no}/answer/${locale}`
        : `${DOMAIN}/${no}/answer`;
}
export function toHomepageShort(locale) {
    return locale !== defaultLocale
        ? `${DOMAIN}/${locale}`
        : `${DOMAIN}`;
}
