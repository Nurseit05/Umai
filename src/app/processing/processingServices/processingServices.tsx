import React from 'react';

import { ProcessingServicesTS } from '@/api/service/processing/processType';

import Banner from '@/components/Banner';

import DOMPurify from "isomorphic-dompurify";

import s from './processingServices.module.scss'

const ProcessingServices = ({data}: {data: ProcessingServicesTS[]}) => {

    if (!Array.isArray(data) || data.length === 0) {
        return null;
      }

    return (
        <section className={s.container} >
            {data?.map((item) => (
                <React.Fragment
                    key={item.id}
                >
                    <Banner
                        title={item.title}
                        imgSrc={item.image}
                        width={220} height={140}
                        wrapperClass={s.wrapperBanner}
                    />
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.content)}} />
                </React.Fragment>
            ))}
        </section>
    );
};

export default ProcessingServices;
