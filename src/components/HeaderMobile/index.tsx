'use client'

import { useState } from 'react'

import Icon from '@/UI/Icon'
import BurgerMenu from '../BurgerMenu'

import s from './headerMobile.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const HeaderMobile = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const onBurgerClick = () => {
        setBurgerOpen(true)
    }

    const closeBurger = () => {
        setBurgerOpen(false)
    }

    return (
        <header className={s.container}>
            <div className={s.logoBurger} >
                <Link className={s.img} href={'/'}>
                    <Image className={s.logo} src="/icons/logo.svg"
                        width={100} height={35} alt='' priority={true}
                    />
                </Link>

                <div className={s.actions}>
                    <div className={s.wrapperText}>
                        <Icon srcImg='/icons/Globe.svg' width={16} height={16} />
                        <p>РУССКИЙ</p>
                        <Icon srcImg='/icons/vectorDown.svg' width={14} height={14} />
                    </div>
                    <button className={s.button} onClick={onBurgerClick}>
                        <Icon width={30} height={30} srcImg={'/icons/menu.svg'} className={s.icon} />
                    </button>
                </div>
            </div>

            <div className={s.searchMagnifying}>
                <div className={s.wrapperInput}>
                    <input type="text" placeholder='Поиск по сайту' />
                    <Icon srcImg='/icons/search.svg' width={24} height={24} />
                </div>
            </div>

            {<BurgerMenu isOpen={burgerOpen} onClose={closeBurger} />}
        </header>
    )
}

export default HeaderMobile
