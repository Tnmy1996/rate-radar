import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Footer = () => {
    const t = useTranslations('footer');
    return (
        <footer className='bg-white px-4 py-4 shadow-sm dark:bg-gray-800 md:px-6'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                    © 2024 Rate Radar
                </p>
                <div className='flex items-center space-x-4'>
                    <Link
                        className='text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                        href='#'
                    >
                        {t('privacy')}
                    </Link>
                    <Link
                        className='text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                        href='#'
                    >
                        {t('terms')}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
