import { WalletAPI } from '@/api/service/wallet_Page';
import React from 'react';
import BannerWallet from './bannerWallet';

const Walletting = async () => {

    const { 
        bannerAPI,
        servicesAPI,
        advantagesAPI
    } = await WalletAPI()

    return (
        <main>
            <BannerWallet data={bannerAPI} />
        </main>
    );
};

export default Walletting;