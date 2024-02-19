'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import s from './nav.module.scss'
import clsx from 'clsx';

const arrayRoute = [
    {name: 'Агрегация', href: '/'},
    {name: 'Процессинг', href: '/processing'},
    {name: 'Кошелек', href: '/purse'},
    {name: 'Терминалы', href: '/terminals'},
    {name: 'Эквайринг', href: '/acquiring'},
    {name: 'Ещё', img: '/Vector.svg', href: '/...'}
]

const NavLeft = () => {

    const pathname = usePathname()

    return (
        <section className='flex gap-6' >
            {arrayRoute.map(item =>
                <Link 
                    key={item.href}
                    href={item.href}
                    className={clsx(pathname === item.href ? s.colorActive : '', item.img ? 'flex gap-2' : '')}
                >
                    {item.name}
                    {item.img ? <Image src={item.img} width={11} height={11} alt=''/> : ''}
                </Link> 
            )}
            
        </section>
    );
};

export default NavLeft;