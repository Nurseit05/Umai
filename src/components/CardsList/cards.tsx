import React from 'react';

import Button, { ButtonColor } from '../Button';

import s from './info-card-list.module.scss'
import clsx from 'clsx';

interface Props  {
    title: string,
    src?: string,
    subtitle?: string,
    desc?: string,
    className?: string,
    classText?: string,
    button?: string,
    radius?: boolean,
    color?: ButtonColor
}

const InfoCards = ({
    className, classText, title, desc, 
    subtitle, button, src, radius, color
}: Props) => {
    return (
        <section className={clsx(s.container, className)}>
            <div className={clsx(s.wrapper_text, classText)}>
                <div className={s.text}>
                    <p>{title}</p>
                    {subtitle && <span>{subtitle}</span>}
                    {desc && <p>{desc}</p>}
                </div>
                {button && <Button color={color} radius={radius} className={radius ? s.buttonRound : s.button} >{button}</Button>}
            </div>
            {src && <div>
                    <img src={src} />
                </div>
            }
        </section>
    );
};

export default InfoCards;