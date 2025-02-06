import path from 'node:path';
import fs from 'fs-extra';
import fg from 'fast-glob';
import YAML from 'js-yaml';
import { defaultLocale, supportedLocales } from './locales';
export async function loadFile(filepath) {
    if (fs.existsSync(filepath))
        return await fs.readFile(filepath, 'utf-8');
    return undefined;
}
export async function loadLocaleVariations(filepath, preprocessor = s => s) {
    const { ext, dir, name } = path.parse(filepath);
    const data = {};
    for (const locale of supportedLocales) {
        const file = preprocessor(await loadFile(path.join(dir, `${name}.${locale}${ext}`)) || '');
        if (file)
            data[locale] = file;
    }
    if (!data[defaultLocale]) {
        // default version
        const file = preprocessor(await loadFile(filepath) || '');
        if (file)
            data[defaultLocale] = file;
    }
    return data;
}
export function readmeCleanUp(text) {
    return text
        .replace(/<!--info-header-start-->[\s\S]*<!--info-header-end-->/, '')
        .replace(/<!--info-footer-start-->[\s\S]*<!--info-footer-end-->/, '')
        .trim();
}
export function loadInfo(s) {
    const object = YAML.load(s);
    if (!object)
        return undefined;
    const arrayKeys = ['tags', 'related'];
    for (const key of arrayKeys) {
        if (object[key]) {
            object[key] = (object[key] || '')
                .toString()
                .split(',')
                .map((i) => i.trim())
                .filter(Boolean);
        }
        else {
            object[key] = undefined;
        }
    }
    return object;
}
export const QUIZ_ROOT = path.resolve(__dirname, '../questions');
export async function loadQuizes() {
    const folders = await fg('{0..9}*-*', {
        onlyDirectories: true,
        cwd: QUIZ_ROOT,
    });
    const quizes = await Promise.all(folders.map(async (dir) => loadQuiz(dir)));
    return quizes;
}
export async function loadQuiz(dir) {
    return {
        no: Number(dir.replace(/^(\d+)-.*/, '$1')),
        difficulty: dir.replace(/^\d+-(.+?)-.*$/, '$1'),
        path: dir,
        info: await loadLocaleVariations(path.join(QUIZ_ROOT, dir, 'info.yml'), loadInfo),
        readme: await loadLocaleVariations(path.join(QUIZ_ROOT, dir, 'README.md'), readmeCleanUp),
        template: await loadFile(path.join(QUIZ_ROOT, dir, 'template.ts')) || '',
        tests: await loadFile(path.join(QUIZ_ROOT, dir, 'test-cases.ts')),
    };
}
export async function loadQuizByNo(no) {
    const folders = await fg(`${no}-*`, {
        onlyDirectories: true,
        cwd: QUIZ_ROOT,
    });
    if (folders.length)
        return await loadQuiz(folders[0]);
    return undefined;
}
export function resolveInfo(quiz, locale = defaultLocale) {
    var _a, _b, _c, _d;
    const info = Object.assign({}, quiz.info[defaultLocale], quiz.info[locale]);
    info.tags = ((_a = quiz.info[locale]) === null || _a === void 0 ? void 0 : _a.tags) || ((_b = quiz.info[defaultLocale]) === null || _b === void 0 ? void 0 : _b.tags) || [];
    info.related = ((_c = quiz.info[locale]) === null || _c === void 0 ? void 0 : _c.related) || ((_d = quiz.info[defaultLocale]) === null || _d === void 0 ? void 0 : _d.related) || [];
    if (typeof info.tags === 'string')
        // @ts-expect-error
        info.tags = info.tags.split(',').map(i => i.trim()).filter(Boolean);
    return info;
}
