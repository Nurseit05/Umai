import React, { useEffect, useState } from 'react';
import CardsDefault from '@/components/CardsDefault';

import s from './card.module.scss'
import { getMainPage } from '@/api/service/main_Page';
import { MainPageAll } from '@/api/service/main_Page/mainType';

const Cards = () => {

    const [services, setServices] = useState<MainPageAll[]>([]);

    async function fetchData() {
        try {
          const res = await getMainPage();
          setServices(res.data.services);
        } catch (error) {
          console.log(error);
        }
    }    

    useEffect(() => {
        fetchData()
    }, []);
    
    if (!services) {
        return null;
    }

    return (
        <div className={s.container}>
            {services.map((item, idex) => 
                <CardsDefault
                    key={idex}
                    title={item.title} subtitle={item.text}
                    imgSrc={item.image}
                    button={true}
                />
            )}
        </div>
    );
};

export default Cards;