import Button from '@/components/Button';
import Image from 'next/image';
import React from 'react';

import s from './NavSearch.module.scss'
import clsx from 'clsx';

const NavSearch = () => {
    return (
        <div className={clsx('mx-auto container', s.wrapper)} >
            <h2>Поиск по сайту</h2>
            <div className='flex gap-x-14' >
                <section className='flex items-center gap-x-2' >
                    <div className={s.round} >
                        <Image
                            src='/search.svg'
                            width={15} height={15} alt='search'
                        />
                    <input type="text" placeholder='Я ищу' />
                    </div>
                    <Button>Найти</Button>
                </section>
                    
                <section className='flex items-center gap-x-6'>
                    <p>Карьера (вакансии)</p>
                    <div className={s.lineDiv} ></div>
                    <p>Контакты</p>
                </section>
            </div>
        </div>
    );
};

export default NavSearch;