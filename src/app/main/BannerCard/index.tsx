'use client'

import CardsBanner from './containers/CardsBanner';

import s from './bannerCards.module.scss'
import { useMediaQuery } from '@/hook/useMediaQuery';
import { getMainPage } from '@/api/service/main_Page';
import { useEffect, useState } from 'react';
import { MainPageAll } from '@/api/service/main_Page/mainType';

const BannerCard = () => {

    const sizeDesktop = useMediaQuery()

    const [banners, setBanners] = useState<MainPageAll[]>([]);

    async function fetchData() {
        try {
            const res = await getMainPage();
            setBanners(res.data.additional_services);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const bannersArray = banners || [];

    return (
        <div className={s.container}>
                {bannersArray.map((item,index) => 
                    <CardsBanner
                        key={index}
                        title={item.title}
                        text={item.text}
                        button={item.action_text  as string}
                        imgSrc={(sizeDesktop ? item.image  : item.image_mobile || item.image) as string}
                    />
                )}
        </div>
    );
};

export default BannerCard;