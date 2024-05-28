import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['ar', 'de', 'en', 'es', 'fr', 'hi', 'ja', 'zh'],

    // Used when no locale matches
    defaultLocale: 'en',
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ar|de|en|es|fr|hi|ja|zh)/:path*'],
};
