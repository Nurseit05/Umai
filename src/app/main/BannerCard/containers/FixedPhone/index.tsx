'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

import s from './fixPhone.module.scss';

const FixedPhone = () => {
    const [isVisible, setIsVisible] = useState(false);

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
        <div className={`${s.fixedDiv} ${isVisible ? s.visible : ''}`}>
            <Image width={30} height={30} alt='' src='/icons/phone.svg' />
        </div>
    );
};

export default FixedPhone;
