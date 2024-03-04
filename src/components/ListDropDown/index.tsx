import clsx from 'clsx'

import { useState } from 'react'

import Icon from '@/UI/Icon'

import s from './list-drop-down.module.scss'

interface Props {
    title: string
    icon: React.ReactNode
    list?: {
        title: string
        value: string | number
    }[]

    onClick(item: { title: string; value: string | number }): void
    className?: string
}

const ListDropDown = ({
    title,
    icon,
    list,
    onClick,
    className = '',
}: Props) => {
    const [isShow, setIsShow] = useState(false)

    const toggleShow = () => {
        setIsShow(!isShow)
    }
    return (
        <div className={clsx(s.container, className)}>
            <div onClick={toggleShow} className={s.link}>
                <div className={s.titleWrapper}>
                    <div className={s.title}>
                        <p>{title}</p>
                        <Icon
                            className={clsx(s.arrow, isShow && s.active)}
                            srcImg='/icons/vectorDown.svg'
                            width={20}
                            height={20}
                        />
                    </div>
                    {isShow && (
                        <ul className={clsx(s.dropDown)}>
                            {list?.map((item, index) => (
                                <li onClick={() => onClick(item)} key={index}>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListDropDown
