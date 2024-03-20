import clsx from 'clsx'

import s from './burger-menu.module.scss'

import Image from 'next/image'
import Link from 'next/link'

interface Props {
    isOpen: boolean
    onClose: () => void
}

const Navigation = [
    { title: 'Процессинг', link: '/processing', img: '/icons/file.svg' },
    { title: 'Офферта', link: '/', img: '/icons/file.svg' },
    { title: 'Правила', link: '/..', img: '/icons/burgerLine.svg' },
    { title: 'Офисы и банкоматы', link: '/...', img: '/icons/MapPin.svg' }
]

const BurgerMenu = ({ isOpen, onClose }: Props) => {

    return (
        <div
            className={
                isOpen ? clsx(s.modalOpen, 'requires-no-scroll') : s.modalClosed
            }
        >
            <div className={s.content}>
                <div className={s.wrapper}>
                    <div className={s.header_box}>
                        <Image src="/icons/logo.svg" className={s.image}
                            width={100} height={35} alt='' priority={true}
                        />

                        <button onClick={onClose} className={s.close_btn}>
                            <Image width={24} height={24} alt=''
                            src={'/icons/close.svg'} className={s.close_icon} />
                        </button>
                    </div>

                    <div className={s.link_box}>
                        {Navigation.map(link => (
                            <div className={s.wrapperItem} key={link.link}>
                                <Image src={link.img} width={16} height={16} alt='' />
                                <Link
                                    className={s.link}
                                    href={link?.link}
                                    onClick={onClose}
                                >
                                    {link?.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu
