import { bannerProcessing, underBannerText } from '@/api/service/processing/processType';

import Banner from '@/components/Banner';
import UnderTextBanner from '@/components/BannerUnderText';


const BannerProcess = ({
    banner, 
    underBannerProcessing
}: {
    banner: bannerProcessing,
    underBannerProcessing: underBannerText
}) => {

    if (!banner && !underBannerProcessing) {
        return null;
    }

    return (
        <section>
            {banner && (
                <Banner
                    width={273}
                    height={205}
                    title={banner?.title}
                    subtitle={banner?.text}
                    imgSrc={banner?.image}
                    backgroundUrl={banner?.background}
                />
            )}
            <UnderTextBanner
                title={underBannerProcessing?.title_top} text={underBannerProcessing?.text_top}
            />
            <UnderTextBanner 
                title={underBannerProcessing?.title_bottom} text={underBannerProcessing?.text_bottom}
            />
        </section>
    );
};

export default BannerProcess;