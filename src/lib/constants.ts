export const CURRENCIES = {
    AUD: 'AUD',
    EUR: 'EUR',
    GBP: 'GBP',
    JPY: 'JPY',
    USD: 'USD',
} as const;

export const LANGUAGES = {
    ar: 'ar',
    de: 'de',
    en: 'en',
    es: 'es',
    fr: 'fr',
    hi: 'hi',
    ja: 'ja',
    zh: 'zh',
} as const;

export const LANGUAGE_NAMES = {
    [LANGUAGES.ar]: 'العربية', // Arabic
    [LANGUAGES.de]: 'Deutsch', // German
    [LANGUAGES.en]: 'English',
    [LANGUAGES.es]: 'Español',
    [LANGUAGES.fr]: 'Français',
    [LANGUAGES.hi]: 'हिन्दी', // Hindi
    [LANGUAGES.ja]: '日本語', // Japaneses
    [LANGUAGES.zh]: '中文', // Chinese
} as const;
