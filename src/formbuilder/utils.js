import S from 'string';

export const slugify = (string) => {
    return S(string).slugify().replace("-", "_").s;
};

export const clone = (object) => {
    return JSON.parse(JSON.stringify(object));
};

export const unique = (array) => {
    return Array.from(new Set(array));
};