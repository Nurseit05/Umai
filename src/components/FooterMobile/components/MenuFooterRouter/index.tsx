import Icon from '@/UI/Icon';
import React, { useState } from 'react';

import s from './menuFooterRouter.module.scss'
import BurgerMenu from '@/components/BurgerMenu';

const MenuFooterRouter = () => {

    const [burgerOpen, setBurgerOpen] = useState(false)
    const onBurgerClick = () => {
        setBurgerOpen(true)
    }

    const closeBurger = () => {
        setBurgerOpen(false)
    }

    const arrayIcon = [
        {img: '/icons/homeIcon.svg', text: 'Главная', href: '/'},
        {img: '/icons/flowerIcon.svg', text: 'Агрегация', href: '/processing'},
        {img: '/icons/procesIcon.svg', text: 'Процессинг', href: '/...'},
        {img: '/icons/walletIcon.svg', text: 'Кошелек', href: '/...'},
        {img: '/icons/menuRight.svg', text: 'Меню', onClick: onBurgerClick}
    ]

    return (
        <section className={s.container}>
            <ul className={s.wrapperUl}>
                {arrayIcon.map(item => 
                    <li className={s.listText} key={item.img}>
                        <Icon onClick={item.onClick} srcImg={item.img}/>
                        <p>{item.text}</p>
                    </li>
                )}
            </ul>

            {<BurgerMenu isOpen={burgerOpen} onClose={closeBurger} />}
        </section>
    );
};

export default MenuFooterRouter;