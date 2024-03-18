import { forProvidersAggregationTS } from '@/api/service/aggregation_Page/aggregation';
import Image from 'next/image';
import React from 'react';

import s from './forProviders.module.scss'
import { useSizeByHeaders } from '@/hook/useSizeMobile';
import { headers } from 'next/headers';

const ForProviders = ({data}: {data: forProvidersAggregationTS}) => {

    const { isMobile } = useSizeByHeaders(headers())

    return (
        <section className={s.container}>
            <h3>{data?.title}</h3>

            <div className={s.wrapper} >
                <div className={s.wrapperText} >
                    <p>{data?.text_top}</p>
                    {!isMobile && <div className={s.textRound} >{data?.text_middle}</div>}
                </div>
                <Image 
                    width={360} height={510}
                    src={data?.image} alt=''
                />
                {isMobile && <div className={s.textRound} >{data?.text_middle}</div>}
            </div>
            <span>{data?.text_bottom}</span>
        </section>
    );
};

export default ForProviders;