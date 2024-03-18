import { bannerAcquiringTS } from '@/api/service/acquiring_Page/acquiring';
import Banner from '@/shared/components/Banner';
import React from 'react';

const BannerAcquirin = ({data}: {data: bannerAcquiringTS}) => {

    if(!data) {
        return null;
    }

    return (
        <section>
            <Banner
                title={data?.title}
                subtitle={data?.text}
                imgSrc={data?.image}
                width={593} height={221}
            />
        </section>
    );
};

export default BannerAcquirin;