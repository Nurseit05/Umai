import InfoCards from '@/components/CardsList/cards';
import clsx from 'clsx';
import React from 'react';

import s from './map.module.scss'

const CardMap = () => {
    return (
        <div className='container mx-auto flex gap-x-6' >
            <InfoCards
                title='Обновления' desc='Контролируйте Ваши расходы. Не можете вспомнить когда и какие 
                счета Вы оплачивали? Это сложно. Оплачивая счета через кошелек UMAI,
                Вы всегда можете просмотреть Ваш «Журнал Транзакций» и убедится в том, что все
                Ваши счета оплачены и Ваши деньги работают на Вас.'
                className={clsx(s.newData)}
            />
            <InfoCards
                title='Ближайшие' subtitle='Филиалы'
                className={clsx(s.cardMap)} button='Смотреть на карте' imgSrc='/map.png'
            />
        </div>
    );
};

export default CardMap;