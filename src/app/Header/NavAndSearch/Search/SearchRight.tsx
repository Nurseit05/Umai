import Image from 'next/image';
import React from 'react';

import s from './search.module.scss'

const SearchRight = () => {
    return (
        <section className={s.wrapper}>
            <input type="text" placeholder='Поиск по сайту' />
            <Image src='/search.svg' width={24} height={24} alt='' />
        </section>
    );
};

export default SearchRight;