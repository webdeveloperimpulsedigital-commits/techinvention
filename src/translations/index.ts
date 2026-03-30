import { english } from './languages/english';
import { hindi } from './languages/hindi';
import { arabic } from './languages/arabic';
import { spanish } from './languages/spanish';
import { french } from './languages/french';

export const translations: Record<string, any> = {
    en: english,
    hi: hindi,
    ar: arabic,
    es: spanish,
    fr: french
};
