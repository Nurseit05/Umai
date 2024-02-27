import React from 'react';
import CardsDefault from '@/components/CardsDefault';

import s from './card.module.scss'
import clsx from 'clsx';

const Cards = () => {
    return (
        <div>
            <section className='flex gap-x-6'>
                <CardsDefault
                    title='Агрегация' subtitle='Теперь все важи платежи в одном месте!' 
                    classText={clsx(s.aggrText)}  imgSrc='/aggregation.svg'
                    className={s.Aggregation} button={true}
                />
                <CardsDefault
                    title='Процессинг' subtitle='Современное информационное и технологическое взаимодействие' 
                    classText={clsx(s.procText)}  imgSrc='/processing.png'
                    className={s.Processing} button={true}
                />
            </section>
            <section className='flex gap-x-6 mt-6'>
                <CardsDefault
                    title='Кошелек' subtitle='Все ваши средства у вас под рукой!' 
                    classText={clsx(s.purText)}  imgSrc='/purse.svg'
                    className={s.Purse} button={true}
                />
                <CardsDefault
                    title='Эквайринг' subtitle='Технология безналичного приема платежей ' 
                    classText={clsx(s.acqText)}  imgSrc='/acquiring.svg'
                    className={s.Acquiring} button={true}
                />
            </section>
        </div>
    );
};

export default Cards;