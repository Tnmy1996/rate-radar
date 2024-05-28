'use client';

import { useGetExchangeRates } from '@/api';
import {
    type ColumnDef,
    type ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type RowData,
    type SortingState,
    useReactTable,
    type VisibilityState,
} from '@tanstack/react-table';
import { ChevronDown } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useContext, useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { CURRENCIES } from '@/lib/constants';
import { FilterContext } from '@/lib/filter-context';

import CurrencyIcon from './currency-icon';

export type CurrencyData = {
    currency: string;
    rate: string;
};

declare module '@tanstack/react-table' {
    interface TableMeta<TData extends RowData> {
        currency: string;
        locale: string;
    }
}

const CurrencyFormatters = {
    [CURRENCIES.USD]: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 7,
    }),
    [CURRENCIES.EUR]: new Intl.NumberFormat('en-EU', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 7,
    }),
    // European Union (Euro)
    [CURRENCIES.GBP]: new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        maximumFractionDigits: 7,
    }),
    // United Kingdom (British Pound Sterling)
    [CURRENCIES.AUD]: new Intl.NumberFormat('en-AU', {
        style: 'currency',
        currency: 'AUD',
        maximumFractionDigits: 7,
    }),
    // Australia (Australian Dollar)
    [CURRENCIES.JPY]: new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
        maximumFractionDigits: 7,
    }), // Japan (Japanese Yen)
};

export const columns: ColumnDef<CurrencyData>[] = [
    {
        accessorKey: 'currency',
        header: 'Cryptocurrency',
        cell: ({ row }) => (
            <div className='flex items-center space-x-2'>
                <div className='h-6 w-6'>
                    <CurrencyIcon coin={row.getValue('currency')} />
                </div>
                <span>{row.getValue('currency')}</span>
            </div>
        ),
    },
    {
        accessorKey: 'rate',
        header: ({ table }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const t = useTranslations('table');
            const currency = (table.options?.meta?.currency ||
                CURRENCIES.USD) as keyof typeof CURRENCIES;
            return (
                <div>
                    {t('rate')} / {currency}
                </div>
            );
        },

        cell: ({ row, table }) => {
            const currency = (table.options?.meta?.currency ||
                CURRENCIES.USD) as keyof typeof CURRENCIES;
            const rate = parseFloat(row.getValue('rate'));
            const formattedRate = CurrencyFormatters[currency].format(rate);
            return <div>{formattedRate}</div>;
        },
    },
];

export function CurrencyDataTable() {
    const { currency } = useContext(FilterContext);
    const language = useLocale();
    const t = useTranslations('table');

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {},
    );

    // will poll every 4 seconds
    const { data: api_response, isLoading } = useGetExchangeRates(currency);

    const data = useMemo(() => {
        const rates = api_response?.data.rates ?? {};
        return Object.keys(rates).map((key) => ({
            currency: key,
            rate: rates[key],
        }));
    }, [api_response?.data.rates]);

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
        },
        meta: {
            currency,
            locale: language,
        },
    });

    const loading = (
        <div
            className='flex h-3/4 items-center justify-center text-center'
            role='status'
        >
            <svg
                aria-hidden='true'
                className='inline h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                />
                <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                />
            </svg>
            <span className='sr-only'>Loading...</span>
        </div>
    );

    return (
        <div className='w-full'>
            <div className='flex items-center py-4'>
                <Input
                    placeholder={t('placeholder')}
                    value={
                        (table
                            .getColumn('currency')
                            ?.getFilterValue() as string) ?? ''
                    }
                    onChange={(event) =>
                        table
                            .getColumn('currency')
                            ?.setFilterValue(event.target.value)
                    }
                    className='max-w-sm'
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline' className='ml-auto'>
                            {t('columns')}{' '}
                            <ChevronDown className='ml-2 h-4 w-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className='capitalize'
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {t(column.id)}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {isLoading ? (
                loading
            ) : (
                <>
                    <div className='rounded-md border'>
                        <Table className=''>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead
                                                    className='bold'
                                                    key={header.id}
                                                >
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header.column
                                                                  .columnDef
                                                                  .header,
                                                              header.getContext(),
                                                          )}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={
                                                row.getIsSelected() &&
                                                'selected'
                                            }
                                        >
                                            {row
                                                .getVisibleCells()
                                                .map((cell) => (
                                                    <TableCell key={cell.id}>
                                                        {flexRender(
                                                            cell.column
                                                                .columnDef.cell,
                                                            cell.getContext(),
                                                        )}
                                                    </TableCell>
                                                ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className='h-24 text-center'
                                        >
                                            {t('no-result')}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className='flex items-center justify-end space-x-2 py-4'>
                        <div className='flex-1 text-sm text-muted-foreground'></div>
                        <div className='space-x-2'>
                            <Button
                                variant='outline'
                                size='sm'
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                {t('previous')}
                            </Button>
                            <Button
                                variant='outline'
                                size='sm'
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                {t('next')}
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
