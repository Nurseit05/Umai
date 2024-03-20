import CardsDefault from '@/shared/components/CardsDefault';

import { useFetch } from '@/hook/useFetch';

import { ServicesMainTS } from '@/api/service/main_Page/mainType';

import s from './card.module.scss'


const Cards = async () => {

    const mainPage = await useFetch({ URL: 'mainpage/get_main/'})
    
    if (!mainPage) {
        return null;
    }

    const servicesData = mainPage?.services

    return (
        <div className={s.container}>
            {servicesData?.map((item: ServicesMainTS, index: number) => 
                <CardsDefault
                    key={index}
                    title={item.title} subtitle={item.text}
                    imgSrc={item.image}
                    button={true}
                />
            )}
        </div>
    );
};

export default Cards;