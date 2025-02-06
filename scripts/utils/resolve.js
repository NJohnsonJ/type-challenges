import { defaultLocale } from '../locales';
export function resolveFilePath(dir, name, ext, locale) {
    if (locale === defaultLocale)
        return `${dir}/${name}.${ext}`;
    else
        return `${dir}/${name}.${locale}.${ext}`;
}
