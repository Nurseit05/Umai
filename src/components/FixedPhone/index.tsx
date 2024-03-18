'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useMediaQuery } from '@/hook/useMediaQuery';

import s from './fixPhone.module.scss';
import clsx from 'clsx';

interface Props {
    classWrapper?: string;
    booleanText?: boolean | false;
}

const FixedPhone = ({classWrapper, booleanText }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    const sizeDesktop = useMediaQuery()

    useEffect(() => {
        const handleScroll = () => {
            const triggerHeight = 600;
            setIsVisible(window.scrollY > triggerHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${clsx(s.fixedDiv, classWrapper)} ${isVisible ? s.visible : ''}`}>
            {sizeDesktop && booleanText ? (
                <>
                    <p>оставить заявку</p>
                    <Image
                        width={28} height={28}
                        src='/icons/tabler_arrow-up.svg' alt=''
                    />
                </>
            ) : (
                    <Image
                        src='/icons/phone.svg'
                        width={29} height={29} alt=''
                    />
            )} 
        </div>
    );
};

export default FixedPhone;
