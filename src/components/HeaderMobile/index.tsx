
import Icon from '@/UI/Icon'

import Link from 'next/link'
import Image from 'next/image'

import BurgerButton from './burgerButton/burgerButton'

import s from './headerMobile.module.scss'

const HeaderMobile = () => {

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
                    <BurgerButton/>
                </div>
            </div>

            <div className={s.searchMagnifying}>
                <div className={s.wrapperInput}>
                    <input type="text" placeholder='Поиск по сайту' />
                    <Icon srcImg='/icons/search.svg' width={24} height={24} />
                </div>
            </div>

        </header>
    )
}

export default HeaderMobile
