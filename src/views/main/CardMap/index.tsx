import CardText from './containers/CardText';
import CardsDefault from '@/shared/components/CardsDefault';

import { useFetch } from '@/shared/hook/useFetch';

import s from './map.module.scss'

const CardMap = async () => {

    const mainPage = await useFetch({ URL: 'mainpage/get_main/'})

    if(!mainPage) {
        return null;
    }

    const branches = mainPage?.branches;
    const upDates = mainPage?.updates;

    return (
        <div className={s.container} >
            <CardText data={upDates}/>
            <CardsDefault
                title={branches?.title} subtitle={branches?.text}
                imgSrc={branches?.image}
                button={false}
                backgroundUrl={branches?.background_image}
            />
        </div>
    );
};

export default CardMap;