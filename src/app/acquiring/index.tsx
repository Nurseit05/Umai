import { AcquiringAPI } from '@/api/service/acquiring_Page';

import BannerAcquirin from './bannerAcquiring';
import InternetAcquiring from './internetAcquiring';
import AdvantagesTitleAcquiring from './advantagesTitleAcquiring';
import PossiblitesAcquiring from './possiblitesAcquiring';

import s from './main.module.scss'


const Acquiring = async () => {

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

export default Acquiring;