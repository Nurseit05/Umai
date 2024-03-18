import { WalletAPI } from '@/api/service/wallet_Page';
import React from 'react';
import BannerWallet from './bannerWallet';

import s from './wallet.module.scss'
import ServicesCards from './servicesCards';
import ChooseUmai from './chooseUmai';

const Walletting = async () => {

    const {
        bannerAPI,
        servicesAPI,
        advantagesAPI
    } = await WalletAPI()

    return (
        <main className={s.container} >
            <BannerWallet data={bannerAPI} />
            <ServicesCards data={servicesAPI} />
            <ChooseUmai data={advantagesAPI} />
        </main>
    );
};

export default Walletting;