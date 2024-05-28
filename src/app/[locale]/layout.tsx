import '@/styles/globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';

import Providers from '@/lib/providers';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'RateRadar',
};

export default async function Layout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();
    return (
        <html lang={locale} suppressHydrationWarning>
            <head></head>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    inter.variable,
                )}
            >
                <Providers>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </Providers>
            </body>
        </html>
    );
}
