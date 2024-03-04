import React from 'react';

import Button from '@/components/Button';

import s from './cardsBanner.module.scss'
import clsx from 'clsx';
import { useMediaQuery } from '@/hook/useMediaQuery';
import Image from 'next/image';

interface Props  {
    title: string,
    imgSrc: string,
    imgMobile?: string,
    subtitle: string,
    className: string,
    classText?: string,
    titleBlue?: string,
    button?: string,
    text?: string
}

const CardsBanner = ({
    className,
    classText, 
    title, 
    subtitle, 
    imgSrc, 
    titleBlue, 
    button, 
    text,
}: Props) => {

    const sizeDesktop = useMediaQuery()

    return (
        <div className={clsx(s.container, className)}>
            <div className={clsx(classText)}>
                <div className={s.text}>
                    <p>
                        {title}
                        {titleBlue && <text className={s.textBlue}>{titleBlue}</text>}
                    </p>
                    <span>{subtitle}</span>
                    {text && <div>{text}</div>}
                </div>
                {!sizeDesktop && <Image src={imgSrc} height={200} width={200} alt='' />}
                <Button round={false} className={s.button}>{button || 'Узнать подробнее'}</Button>
            </div>
            {sizeDesktop && <Image src={imgSrc} height={360} width={410} alt='atm' />}
        </div>
    );
};

export default CardsBanner;