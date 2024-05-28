'use client';

import { createContext, useState } from 'react';

import { type Currency } from '@/lib/types';

import { CURRENCIES } from './constants';

export type FilterContextType = {
    currency: Currency;
    setCurrency: React.Dispatch<React.SetStateAction<Currency>>;
};

const defaultValues: FilterContextType = {
    currency: CURRENCIES.USD,
    setCurrency: () => null,
};

export const FilterContext = createContext<FilterContextType>(defaultValues);

export const FilterContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [currency, setCurrency] = useState<Currency>(CURRENCIES.USD);

    return (
        <FilterContext.Provider
            value={{
                currency,
                setCurrency,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
