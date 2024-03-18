'use client'

import React, { useState } from 'react';

import BurgerMenu from '@/shared/components/BurgerMenu';

import s from './burgerButton.module.scss'
import Image from 'next/image';

const BurgerButton = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const onBurgerClick = () => {
        setBurgerOpen(true)
    }

    const closeBurger = () => {
        setBurgerOpen(false)
    }


    return (
        <>
            <button className={s.button} onClick={onBurgerClick}>
                <Image alt='' width={30} height={30} src={'/icons/menu.svg'} className={s.icon} />
            </button>

            {<BurgerMenu isOpen={burgerOpen} onClose={closeBurger} />}
        </>
    );
};

export default BurgerButton;