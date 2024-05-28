import { useQuery } from '@tanstack/react-query';

export const TAGS = {
    ExchangeRates: 'exchange-rates',
} as const;

export type ExchangeRates = {
    data: {
        currency: string;
        rates: Record<string, string>;
    };
};

export const getExchangeRates = async (
    params?: string,
): Promise<ExchangeRates> => {
    const response = await fetch(
        `https://api.coinbase.com/v2/exchange-rates${
            params ? `?currency=${params}` : ''
        }`,
    );

    return response.json();
};

export const useGetExchangeRates = (params?: string) => {
    return useQuery({
        queryKey: [TAGS.ExchangeRates, params],
        queryFn: () => getExchangeRates(params),
    });
};
