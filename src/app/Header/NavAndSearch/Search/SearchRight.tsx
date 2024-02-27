import Image from 'next/image';
import React from 'react';

import s from './search.module.scss'

const SearchRight = () => {
    return (
        <div className={s.wrapper}>
            <input type="text" placeholder='Поиск по сайту' />
            <Image src='/icons/search.svg' width={24} height={24} alt='' />
        </div>
    );
};

export default SearchRight;