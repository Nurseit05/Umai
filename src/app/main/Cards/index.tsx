import React, { useEffect, useState } from 'react';
import CardsDefault from '@/components/CardsDefault';

import s from './card.module.scss'
import clsx from 'clsx';
import { Main_PageApi } from '@/api/service/main_Page';
import { Blocks } from '@/api/service/main_Page/type';

const Cards = () => {

    const [blocks, setBlocks] = useState<Blocks[]>([]);

    useEffect(() => {
      Main_PageApi.getMainPage()
        .then((res) => {
          setBlocks(res.data.blocks);
        })
        .catch((error) => {
          console.log(error);
      });
    }, []);

    return (
        <div className={s.container}>
            <section className={s.wrapper}>
                <CardsDefault
                    title='Агрегация' subtitle='Теперь все ваши платежи в одном месте!' 
                    classText={clsx(s.aggrText)}  imgSrc='/aggregation.svg'
                    className={s.Aggregation} button={true}
                />
                <CardsDefault
                    title='Процессинг' subtitle='Современное информационное и технологическое взаимодействие' 
                    classText={clsx(s.procText)}  imgSrc='/processing.png'
                    className={s.Processing} button={true}
                />
            </section>
            <section className={s.wrapper}>
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