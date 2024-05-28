import { type CURRENCIES, type LANGUAGES } from './constants';

export type Currency = (typeof CURRENCIES)[keyof typeof CURRENCIES];

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];
