'use client'

import React, { useState } from 'react';

import Icon from '@/UI/Icon';

import BurgerMenu from '@/components/BurgerMenu';

import s from './burgerButton.module.scss'

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
                <Icon width={30} height={30} srcImg={'/icons/menu.svg'} className={s.icon} />
            </button>

            {<BurgerMenu isOpen={burgerOpen} onClose={closeBurger} />}
        </>
    );
};

export default BurgerButton;