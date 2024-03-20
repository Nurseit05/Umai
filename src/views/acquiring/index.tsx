import { AcquiringAPI } from '@/api/service/acquiring_Page';

import BannerAcquirin from './ui/bannerAcquiring';
import InternetAcquiring from './ui/internetAcquiring';
import AdvantagesTitleAcquiring from './ui/advantagesTitleAcquiring';
import PossiblitesAcquiring from './ui/possiblitesAcquiring';

import s from './main.module.scss'


export const AcquiringPage = async () => {

    const {
        bannerAcquiringAPI,
        internetAcquiringAPI,
        advantagesTitleAcquiringAPI,
        possiblitesAcquiringAPI
    } = await AcquiringAPI();

    return (
        <main className={s.container} >
            <BannerAcquirin data={bannerAcquiringAPI} />
            <InternetAcquiring data={internetAcquiringAPI} />
            <AdvantagesTitleAcquiring data={advantagesTitleAcquiringAPI} /> 
            <PossiblitesAcquiring data={possiblitesAcquiringAPI} />
        </main>
    );
};