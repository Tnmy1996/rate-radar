'use client';

import { DropdownMenuRadioGroup } from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { LANGUAGE_NAMES, LANGUAGES } from '@/lib/constants';

const languages = Object.values(LANGUAGES).map((l) => ({
    id: l,
    name: LANGUAGE_NAMES[l],
}));

export const LanguageDropdown = () => {
    const language = useLocale();
    const router = useRouter();
    const t = useTranslations('header');

    const onLanguageChange = (language: string) => {
        router.replace(`/${language}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className='flex items-center space-x-2'
                    variant='outline'
                >
                    <Globe className='h-4 w-4' />
                    <span>
                        {
                            LANGUAGE_NAMES[
                                language as keyof typeof LANGUAGE_NAMES
                            ]
                        }
                    </span>
                    <ChevronDown className='h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-48'>
                <DropdownMenuLabel>{t('select-language')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={language}
                    onValueChange={onLanguageChange}
                >
                    {languages.map((lang) => (
                        <DropdownMenuRadioItem key={lang.id} value={lang.id}>
                            {lang.name}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageDropdown;
