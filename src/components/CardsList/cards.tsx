import React from 'react';

import Button, { ButtonColor } from '../Button';

import s from './info-card-list.module.scss'
import clsx from 'clsx';

interface Props  {
    title: string,
    imgSrc?: string,
    subtitle?: string,
    desc?: string,
    className?: string,
    classText?: string,
    button?: string,
    roundButton?: boolean,
}

const InfoCards = ({
    className, classText, title, desc, 
    subtitle, button, imgSrc, roundButton
}: Props) => {
    return (
        <section className={clsx(s.container, className)}>
            <div className={clsx(s.wrapper_text, classText)}>
                <div className={s.text}>
                    <p>{title}</p>
                    {subtitle && <span>{subtitle}</span>}
                    {desc && <span>{desc}</span>}
                </div>
                {button && <Button round={roundButton} className={roundButton ? s.buttonRound : s.button} >{button}</Button>}
            </div>
            {imgSrc && <div>
                    <img src={imgSrc} />
                </div>
            }
        </section>
    );
};

export default InfoCards;