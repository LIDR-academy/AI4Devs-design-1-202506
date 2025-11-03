import { v4 as uuidv4 } from 'uuid';
export const generateId = () => uuidv4();
export const generateCorrelationId = () => uuidv4();
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export const formatDate = (date) => date.toISOString().split('T')[0];
export const formatDateTime = (date) => date.toISOString();
export const isValidUUID = (uuid) => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
};
export const truncateString = (str, length) => {
    if (str.length <= length)
        return str;
    return str.substring(0, length) + '...';
};
export const camelToKebab = (str) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
export const kebabToCamel = (str) => str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
export const omit = (obj, keys) => {
    const result = { ...obj };
    keys.forEach(key => delete result[key]);
    return result;
};
export const pick = (obj, keys) => {
    const result = {};
    keys.forEach(key => {
        if (key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
};
