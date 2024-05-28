'use client';

import { Currency } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const CurrencyIcon = ({ coin }: { coin: string }) => {
    const [isError, setIsError] = useState(false);

    const onError = () => {
        setIsError(true);
    };

    if (isError) {
        return <Currency width={24} height={24} />;
    }

    return (
        <Image
            src={`/cryptocurrency-icons/svg/color/${coin.toLowerCase()}.svg`}
            alt={coin}
            width={24}
            height={24}
            onError={onError}
        />
    );
};

export default CurrencyIcon;
