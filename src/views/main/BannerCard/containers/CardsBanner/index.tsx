import React from 'react';
import DOMPurify from 'isomorphic-dompurify';

import Image from 'next/image';
import Button from '@/shared/components/Button';

import s from './cardsBanner.module.scss'
import { headers } from 'next/headers';
import { useSizeByHeaders } from '@/shared/hook/useSizeMobile';

interface Props  {
    title: string,
    text: string,
    imgSrc: string,
    button: string,
    mobileImage: string
}

const CardsBanner = ({
    title, 
    text,
    imgSrc, 
    button, 
    mobileImage
}: Props) => {

    const { isMobile } = useSizeByHeaders(headers())

    const cleanedHTML = DOMPurify.sanitize(title);

    return (
        <section className={s.container}>
            <div>
                <p className={s.text}>
                    <h5 dangerouslySetInnerHTML={{__html: cleanedHTML}}/>
                    <span>{text}</span>
                </p>
                {isMobile && <Image src={!isMobile ? imgSrc : mobileImage} height={200} width={200} alt='' />}
                <Button round={false} className={s.button}>{button || 'Узнать подробнее'}</Button>
            </div>
            {!isMobile && <Image src={!isMobile ? imgSrc : mobileImage} height={360} width={410} alt='atm' />}
        </section>
    );
};

export default CardsBanner;