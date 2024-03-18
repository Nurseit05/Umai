
import Link from 'next/link';

import s from './menuFooterRouter.module.scss'
import Image from 'next/image';

const MenuFooterRouter = () => {
    const arrayIcon = [
        {img: '/icons/homeIcon.svg', text: 'Главная', href: '/'},
        {img: '/icons/flowerIcon.svg', text: 'Агрегация', href: '/ac'},
        {img: '/icons/procesIcon.svg', text: 'Процессинг', href: '/processing'},
        {img: '/icons/walletIcon.svg', text: 'Кошелек', href: '/wallet'},
        {img: '/icons/menuRight.svg', text: 'Меню', href: '/...'}
    ]

    return (
        <section className={s.container}>
            <ul className={s.wrapperUl}>
                {arrayIcon.map(item => 
                    <li className={s.listText} key={item.img}>
                        <Link href={item.href}>
                            <Image alt='' width={20} height={20} src={item.img} />
                            <p>{item.text}</p>
                        </Link>
                    </li>
                )}
            </ul>

        </section>
    );
};

export default MenuFooterRouter;