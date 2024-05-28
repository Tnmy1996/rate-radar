import Image from 'next/image';

const CurrencyIcon = ({ coin }: { coin: string }) => {
    return (
        <Image
            src={`/cryptocurrency-icons/svg/color/${coin.toLowerCase()}.svg`}
            alt={coin}
            width={24}
            height={24}
        />
    );
};

export default CurrencyIcon;
