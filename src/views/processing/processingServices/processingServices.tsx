import React from 'react';

import { ProcessingServicesTS } from '@/api/service/processing/processType';

import Banner from '@/shared/components/Banner';

import DOMPurify from "isomorphic-dompurify";

import s from './processingServices.module.scss'

const ProcessingServices = ({data}: {data: ProcessingServicesTS}) => {

    if (!data) {
        return null;
    }

    return (
        <section className={s.container} >
            <React.Fragment
                key={data.id}
            >
                <Banner
                    title={data.title}
                    imgSrc={data.image}
                    width={220} height={140}
                    wrapperClass={s.wrapperBanner}
                />
                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.content)}} />
            </React.Fragment>
        </section>
    );
};

export default ProcessingServices;
