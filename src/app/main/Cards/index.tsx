import React from 'react';
import InfoCards from '@/components/CardsList/cards';

import s from './card.module.scss'
import clsx from 'clsx';

const Cards = () => {
    return (
        <div>
            <div className='container mx-auto flex gap-x-6'>
                <InfoCards 
                    title='Агрегация' subtitle='Теперь все важи платежи в одном месте!' 
                    classText={clsx(s.aggrText)}  imgSrc='/aggregation.svg'
                    className={s.Aggregation} roundButton={true} button='Подробнее'
                />
                <InfoCards 
                    title='Процессинг' subtitle='Современное информационное и технологическое взаимодействие' 
                    classText={clsx(s.procText)}  imgSrc='/processing.png'
                    className={s.Processing} roundButton={true} button='Подробнее'
                />
            </div>
            <div className='container mx-auto flex gap-x-6 mt-6'>
                <InfoCards
                    title='Кошелек' subtitle='Все ваши средства у вас под рукой!' 
                    classText={clsx(s.purText)}  imgSrc='/purse.svg' roundButton={true}
                    className={s.Purse} button='Подробнее'
                />
                <InfoCards
                    title='Эквайринг' subtitle='Технология безналичного приема платежей ' 
                    classText={clsx(s.acqText)}  imgSrc='/acquiring.svg' roundButton={true}
                    className={s.Acquiring} button='Подробнее'
                />
            </div>
        </div>
    );
};

export default Cards;