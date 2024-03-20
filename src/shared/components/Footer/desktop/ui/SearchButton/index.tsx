import Button from '@/shared/components/Button';
import Image from 'next/image';
import React from 'react';

import s from './SearchButton.module.scss'

const SearchButton = () => {
    return (
        <div className={s.container} >
            <h2>Поиск по сайту</h2>
            <div className={s.wrapper} >
                <section className={s.wrapperButton} >
                    <div className={s.round} >
                        <Image
                            src='/icons/search.svg'
                            width={15} height={15} alt='search'
                        />
                    <input type="text" placeholder='Я ищу' />
                    </div>
                    <Button>Найти</Button>
                </section>
                    
                <section className={s.wrapperText}>
                    <p>Карьера (вакансии)</p>
                    <div className={s.lineDiv} ></div>
                    <p>Контакты</p>
                </section>
            </div>
        </div>
    );
};

export default SearchButton;