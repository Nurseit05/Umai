import React from 'react';
import * as DOMPurify from 'dompurify';

import Image from 'next/image';
import Button from '@/components/Button';

import { useMediaQuery } from '@/hook/useMediaQuery';

import s from './cardsBanner.module.scss'

interface Props  {
    title: string,
    text: string,
    imgSrc: string,
    button: string,
}

const CardsBanner = ({
    title, 
    text,
    imgSrc, 
    button, 
}: Props) => {

    const sizeDesktop = useMediaQuery()

    const cleanedHTML = DOMPurify.sanitize(title);

    return (
        <section className={s.container}>
            <div>
                <p className={s.text}>
                    <h5 dangerouslySetInnerHTML={{__html: cleanedHTML}}/>
                    <span>{text}</span>
                </p>
                {!sizeDesktop && <Image src={imgSrc} height={200} width={200} alt='' />}
                <Button round={false} className={s.button}>{button || 'Узнать подробнее'}</Button>
            </div>
            {sizeDesktop && <Image src={imgSrc} height={360} width={410} alt='atm' />}
        </section>
    );
};

export default CardsBanner;