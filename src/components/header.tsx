import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { CurrencyDropDown } from '@/components/currency-dropdown';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import LanguageDropdown from './language-dropdown';

export const Header = () => {
    const t = useTranslations('header');

    return (
        <header className='bg-white px-4 py-4 shadow-sm dark:bg-gray-800 md:px-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-50'>
                        Rate Radar
                    </h1>
                </div>
                <div className='flex items-center space-x-4 lg:space-x-4'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                className='lg:hidden'
                                size='icon'
                                variant='outline'
                            >
                                <Menu className='h-6 w-6' />
                                <span className='sr-only'>{t('toggle')}</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left'>
                            <div className='flex flex-col items-start space-y-4'>
                                <div>
                                    <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-50'>
                                        Rate Radar
                                    </h1>
                                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                                        {t('subheading')}
                                    </p>
                                </div>
                                <div className='flex items-center space-x-4'>
                                    <CurrencyDropDown />
                                    <LanguageDropdown />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className='hidden items-center space-x-4 lg:flex'>
                        <CurrencyDropDown />
                        <LanguageDropdown />
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
