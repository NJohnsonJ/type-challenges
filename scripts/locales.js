export const defaultLocale = 'en';
export const supportedLocales = ['en', 'zh-CN', 'ja', 'ko', 'pt-BR'];
export const messages = {
    'en': require('./locales/en.json'),
    'zh-CN': require('./locales/zh-CN.json'),
    'ja': require('./locales/ja.json'),
    'ko': require('./locales/ko.json'),
    'pt-BR': require('./locales/pt-BR.json'),
};
export function t(locale, key) {
    const result = (messages[locale] && messages[locale][key]) || messages[defaultLocale][key];
    if (!result)
        throw new Error(`Missing message for key "${key}"`);
    return result;
}
export function f(name, locale, ext) {
    if (locale === defaultLocale)
        return `${name}.${ext}`;
    return `${name}.${locale}.${ext}`;
}
