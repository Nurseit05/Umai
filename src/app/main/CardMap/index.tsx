import CardText from '@/app/main/CardMap/containers/CardText';
import CardsDefault from '@/components/CardsDefault';

import clsx from 'clsx';
import s from './map.module.scss'

const CardMap = () => {
    return (
        <div className='flex gap-x-6' >
            <CardText />
            <CardsDefault
                title='Ближайшие' subtitle='Филиалы'
                className={clsx(s.cardMap)} imgSrc='/map.png'
            />
        </div>
    );
};

export default CardMap;