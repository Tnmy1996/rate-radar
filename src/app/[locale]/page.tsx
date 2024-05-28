import { getExchangeRates, TAGS } from '@/api/index';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { CurrencyDataTable } from '@/components/table';

export default async function Home() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: [TAGS.ExchangeRates],
        queryFn: () => getExchangeRates(),
    });

    return (
        <div className='flex min-h-screen flex-col'>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Header />
                <main className='flex flex-1 px-4 py-1 md:px-6 md:py-1'>
                    <div className='container mt-8 flex flex-1'>
                        <CurrencyDataTable />
                    </div>
                </main>
                <Footer />
            </HydrationBoundary>
        </div>
    );
}
