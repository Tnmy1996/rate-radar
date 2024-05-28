'use client';

import { DropdownMenuRadioGroup } from '@radix-ui/react-dropdown-menu';
import { ChevronDown, Currency as CurrencyIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useContext } from 'react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { CURRENCIES } from '@/lib/constants';
import { FilterContext } from '@/lib/filter-context';
import { type Currency } from '@/lib/types';

const currencies = Object.values(CURRENCIES);

export const CurrencyDropDown = () => {
    const { currency, setCurrency } = useContext(FilterContext);

    const t = useTranslations('header');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className='flex items-center space-x-2'
                    variant='outline'
                >
                    <CurrencyIcon className='h-4 w-4' />
                    <span>{currency}</span>
                    <ChevronDown className='h-4 w-4' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-48'>
                <DropdownMenuLabel>{t('select-currency')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    value={currency}
                    onValueChange={(cur) => {
                        setCurrency(cur as Currency);
                    }}
                >
                    {currencies.map((c) => (
                        <DropdownMenuRadioItem key={c} value={c}>
                            {c}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CurrencyDropDown;
