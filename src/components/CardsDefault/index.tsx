import React from 'react';

import Button from '../Button';

import s from './cardsDefault.module.scss'
import clsx from 'clsx';
import { useMediaQuery } from '@/hook/useMediaQuery';
import Image from 'next/image';

interface Props  {
    title: string, 
    subtitle: string,
    className: string, 
    classText?: string,
    imgSrc: string,
    button?: boolean,
}

const CardsDefault = ({
    className, classText, title, 
    subtitle, button, imgSrc,
}: Props) => {

    const sizeDesktop = useMediaQuery()

    return (
        <div className={clsx(s.container, className)}>
            <div className={clsx(s.wrapperText, classText)}>
                <div className={s.text}>
                    <p>{title}</p>
                    {subtitle && <span>{subtitle}</span>}
                </div>
                {sizeDesktop && (
                    <Button
                        round={button}
                        className={button ? s.buttonRound : s.button}
                    >
                        {button ? 'Подробнее' : 'Смотреть на карте'}
                    </Button>
                )
                }
            </div>
            <div>
                <img src={imgSrc}  alt='' />
            </div>
            {!sizeDesktop && (
                <Button
                    round={button}
                    className={button ? s.buttonRound : s.button}
                >
                    {button ? 'Подробнее' : 'Смотреть на карте'}
                </Button>
            )}
        </div>
    );
};

export default CardsDefault;