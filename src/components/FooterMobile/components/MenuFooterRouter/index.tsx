import Icon from '@/UI/Icon';

import Link from 'next/link';

import s from './menuFooterRouter.module.scss'

const MenuFooterRouter = () => {
    const arrayIcon = [
        {img: '/icons/homeIcon.svg', text: 'Главная', href: '/'},
        {img: '/icons/flowerIcon.svg', text: 'Агрегация', href: '/processing'},
        {img: '/icons/procesIcon.svg', text: 'Процессинг', href: '/...'},
        {img: '/icons/walletIcon.svg', text: 'Кошелек', href: '/...'},
        {img: '/icons/menuRight.svg', text: 'Меню', href: '/...'}
    ]

    return (
        <section className={s.container}>
            <ul className={s.wrapperUl}>
                {arrayIcon.map(item => 
                    <li className={s.listText} key={item.img}>
                        <Link href={item.href}>
                            <Icon srcImg={item.img} />
                            <p>{item.text}</p>
                        </Link>
                    </li>
                )}
            </ul>

        </section>
    );
};

export default MenuFooterRouter;