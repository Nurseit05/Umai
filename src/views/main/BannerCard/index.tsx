import CardsBanner from './containers/CardsBanner';

import { AdditionalServicesMainTS } from '@/api/service/main_Page/mainType';

import { useFetch } from '@/hook/useFetch';

import s from './bannerCards.module.scss'

const BannerCard = async () => {

    const mainPage = await useFetch({URL: 'mainpage/get_main/'})
    
    if(!mainPage) {
        return null;
    }

    const additionalServices = mainPage?.additional_services;

    return (
        <div className={s.container}>
                {additionalServices?.map((item: AdditionalServicesMainTS, index: number) => 
                    <CardsBanner
                        key={index}
                        title={item.title}
                        text={item.text}
                        button={item.action_text as string}
                        imgSrc={item.image}
                        mobileImage={item.image_mobile as string}
                    />
                )}
        </div>
    );
};

export default BannerCard;