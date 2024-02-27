import React from 'react';

import Button from '../Button';

import s from './cardsDefault.module.scss'
import clsx from 'clsx';

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

    return (
        <div className={clsx(s.container, className)}>
            <div className={clsx(s.wrapperText, classText)}>
                <div className={s.text}>
                    <p>{title}</p>
                    {subtitle && <span>{subtitle}</span>}
                </div>
                {button 
                    ? <Button round={true} className={s.buttonRound}>Подробнее</Button> 
                    : <Button round={false} className={s.button} >Смотреть на карте</Button>
                }
            </div>
            <div>
                <img src={imgSrc} />
            </div>
        </div>
    );
};

export default CardsDefault;