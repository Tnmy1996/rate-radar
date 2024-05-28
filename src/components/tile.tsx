const Tile = () => {
    return (
        <div className='rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className='text-sm font-semibold text-gray-900 dark:text-gray-50'>
                        Ethereum
                    </h3>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                        ETH
                    </p>
                </div>
                <div className='text-right'>
                    <p className='text-sm font-bold text-gray-900 dark:text-gray-50'>
                        $2,500.00
                    </p>
                    <p className='text-sm text-green-500'>+3.2%</p>
                </div>
            </div>
        </div>
    );
};

export default Tile;
