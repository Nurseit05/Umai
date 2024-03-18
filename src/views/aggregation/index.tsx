import { AggregationAPI } from '@/api/service/aggregation_Page';

import s from './aggregation.module.scss'
import BannerAggregation from './bannerAggregation';
import AdvantageUmai from './advantageUmai';
import ForProviders from './forProviders';
import AdditionalAdvantages from './additionalAdvantages';
import ForAdvertisers from './forAdvertisers';


export const AggregationPage = async () => {

    const {
        bannerAPI,
        underBannerTextAPI,
        advantagesTitleAPI,
        forProvidersAPI,
        additionalAdvantagesAPI,
        forAdvertisersAPI,
        terminalAdvantagesAPI
    } = await AggregationAPI()

    return (
        <main className={s.container} >
            <BannerAggregation banner={bannerAPI} underBannerTextAggregation={underBannerTextAPI} />
            <AdvantageUmai data={advantagesTitleAPI} />
            <ForProviders data={forProvidersAPI} />
            <AdditionalAdvantages data={additionalAdvantagesAPI} />
            <ForAdvertisers forAdver={forAdvertisersAPI} terminal={terminalAdvantagesAPI} />
        </main>
    );
};