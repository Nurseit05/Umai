import React from 'react';

import Button from '@/components/Button';

import s from './cardsBanner.module.scss'
import clsx from 'clsx';

interface Props  {
    title: string,
    imgSrc: string,
    subtitle: string,
    className: string,
    classText?: string,
    titleBlue?: string,
    button?: string
}

const CardsBanner = ({
    className, classText, title, 
    subtitle, imgSrc, titleBlue, button
}: Props) => {
    return (
        <div className={clsx(s.container, className)}>
            <div className={clsx(classText)}>
                <div className={s.text}>
                    <p>
                        {title}
                        {titleBlue && <text className={s.textBlue}>{titleBlue}</text>}
                    </p>
                    <span>{subtitle}</span>
                </div>
                <Button round={false} className={s.button}>{button || 'Узнать подробнее'}</Button>
            </div>
            <div>
                <img src={imgSrc} />
            </div>
        </div>
    );
};

export default CardsBanner;