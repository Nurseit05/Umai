import CardText from '@/app/main/CardMap/containers/CardText';
import CardsDefault from '@/components/CardsDefault';

import clsx from 'clsx';
import s from './map.module.scss'
import { useMediaQuery } from '@/hook/useMediaQuery';
import { useEffect, useState } from 'react';
import { getMainPage } from '@/api/service/main_Page';
import { MainPageAll } from '@/api/service/main_Page/mainType';

const CardMap = () => {

    const sizeDesktop = useMediaQuery()

    const [branches, setBranches] = useState<MainPageAll>();

    async function fetchData() {
        try {
          const res = await getMainPage();
          setBranches(res.data.branches);
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    if (!branches) {
        return null;
    }


    return (
        <div className={s.container} >
            <CardText sizeDesktop={sizeDesktop} />
            <CardsDefault
                title={branches.title} subtitle={branches.text}
                imgSrc={branches.image}
                button={false}
                backgroundUrl={branches.background_image}
            />
        </div>
    );
};

export default CardMap;