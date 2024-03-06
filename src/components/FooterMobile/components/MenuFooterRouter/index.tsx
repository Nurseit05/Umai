import Icon from '@/UI/Icon';
import React, { useState } from 'react';

import s from './menuFooterRouter.module.scss'
import BurgerMenu from '@/components/BurgerMenu';
import Link from 'next/link';

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
                        {item.onClick ? (
                            <div onClick={item.onClick}>
                                <Icon srcImg={item.img} />
                                <p>{item.text}</p>
                            </div>
                        ) : (
                            <Link href={item.href}>
                                <Icon srcImg={item.img} />
                                <p>{item.text}</p>
                            </Link>
                        )}
                    </li>
                )}
            </ul>

            {<BurgerMenu isOpen={burgerOpen} onClose={closeBurger} />}
        </section>
    );
};

export default MenuFooterRouter;