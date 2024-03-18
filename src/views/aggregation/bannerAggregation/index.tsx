import { bannerAggregationTS, underBannerTextAggregationTS } from '@/api/service/aggregation_Page/aggregation';

import Banner from '@/shared/components/Banner';
import UnderTextBanner from '@/shared/components/BannerUnderText';

import s from './bannerAggregation.module.scss'

interface Props {
    banner: bannerAggregationTS;
    underBannerTextAggregation: underBannerTextAggregationTS;
}


const BannerAggregation = ({
    banner, 
    underBannerTextAggregation
}: Props) => {

    if (!banner && !underBannerTextAggregation) {
        return null;
    }

    return (
        <section>
            <Banner
                wrapperClass={s.wrapperBanner}
                width={652}
                height={221}
                title={banner?.title}
                subtitle={banner?.text}
                imgSrc={banner?.image}
                image_mobile={banner?.image_mobile}
            />
            <UnderTextBanner
                title={underBannerTextAggregation?.title_top} text={underBannerTextAggregation?.text_top}
            />
            <UnderTextBanner
                title={underBannerTextAggregation?.title_bottom} text={underBannerTextAggregation?.text_bottom}
                classContainer={s.wrapperContainer}
            />
        </section>
    );
};

export default BannerAggregation;