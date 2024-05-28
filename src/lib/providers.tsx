import { ThemeProvider } from '@/components/theme-provider';

import { FilterContextProvider } from './filter-context';
import ReactQueryProvider from './react-query-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ReactQueryProvider>
                <FilterContextProvider>
                    <ThemeProvider
                        attribute='class'
                        defaultTheme='system'
                        enableSystem
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </FilterContextProvider>
            </ReactQueryProvider>
        </>
    );
};

export default Providers;
