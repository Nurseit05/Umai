import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import s from './translationRight.module.scss'

const translationItems = [
    { src: '/icons/file.svg', alt: 'file', text: 'ОФФЕРТА' },
    { src: '/icons/burgerLine.svg', alt: 'burgerMenu', text: 'Правила' },
    { src: '/icons/MapPin.svg', alt: 'mapPin', text: 'Офисы и банкоматы' },
    { src: '/icons/Globe.svg', alt: 'globeEarch', text: 'Русский' },
];

const TranslationRight = () => {
    return (
        <ul className={s.container}>
            {translationItems.map((item, index) => (
                <li key={index} className={s.wrapper}>
                    <Image
                        src={item.src}
                        alt={item.alt}
                        className={s.imageSize}
                        width={24}
                        height={24}
                    />
                    {index === 3 ? (
                        <Link href='' className={s.wrapper}>
                            <div>{item.text}</div>
                            <Image src='/icons/vectorDown.svg' alt='' width={11} height={11} />
                        </Link>
                    ) : (
                        <Link href=''>{item.text}</Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TranslationRight;
