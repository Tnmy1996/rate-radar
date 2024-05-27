import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'RateRadar',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head />
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    inter.variable,
                )}
            >
                {children}
            </body>
        </html>
    );
}
