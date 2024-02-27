import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import '../style.scss';

const translationItems = [
    { src: '/icons/file.svg', alt: 'file', text: 'ОФФЕРТА' },
    { src: '/icons/burgerLine.svg', alt: 'burgerMenu', text: 'Правила' },
    { src: '/icons/MapPin.svg', alt: 'mapPin', text: 'Офисы и банкоматы' },
    { src: '/icons/Globe.svg', alt: 'globeEarch', text: 'Русский' },
];

const TranslationRight = () => {
    return (
        <ul className='flex items-center gap-8'>
            {translationItems.map((item, index) => (
                <li key={index} className='flex gap-2'>
                    <Image
                        src={item.src}
                        alt={item.alt}
                        className='w-6 h-6'
                        width={24}
                        height={24}
                    />
                    {index === 3 ? (
                        <Link href='' className='flex gap-2'>
                            {item.text}
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
