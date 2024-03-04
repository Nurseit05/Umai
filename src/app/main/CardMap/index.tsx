import CardText from '@/app/main/CardMap/containers/CardText';
import CardsDefault from '@/components/CardsDefault';

import clsx from 'clsx';
import s from './map.module.scss'
import { useMediaQuery } from '@/hook/useMediaQuery';

const CardMap = () => {

    const sizeDesktop = useMediaQuery()

    return (
        <div className={sizeDesktop ? 'flex gap-6' : 'flex flex-col gap-5'} >
            <CardText sizeDesktop={sizeDesktop} />
            <CardsDefault
                title='Ближайшие' subtitle='Филиалы'
                className={clsx(s.cardMap)}
                imgSrc='/map.png'
                button={false}
            />
        </div>
    );
};

export default CardMap;