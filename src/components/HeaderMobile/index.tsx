
import Link from 'next/link'
import Image from 'next/image'

import BurgerButton from './burgerButton/burgerButton'

import s from './headerMobile.module.scss'
import clsx from 'clsx'

interface Props {
    backgroundStyle?: string
}

const HeaderMobile = ({backgroundStyle}: Props) => {

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
                        <Image alt='' src='/icons/Globe.svg' width={16} height={16} />
                        <p>РУССКИЙ</p>
                        <Image alt='' src='/icons/vectorDown.svg' width={14} height={14} />
                    </div>
                    <BurgerButton/>
                </div>
            </div>

            <div className={clsx(s.searchMagnifying, backgroundStyle)}>
                <div className={s.wrapperInput}>
                    <input type="text" placeholder='Поиск по сайту' />
                    <Image alt='' src='/icons/search.svg' width={24} height={24} />
                </div>
            </div>

        </header>
    )
}

export default HeaderMobile
