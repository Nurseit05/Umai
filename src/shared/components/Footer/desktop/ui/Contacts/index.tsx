import Image from 'next/image';

import s from './contacts.module.scss'
import clsx from 'clsx';
import { FooterContactTS, FooterSocialTS } from '@/api/service/header_footer/headerFooter';
import Link from 'next/link';

const arrayIcons = [
    {img: '/icons/facebook.svg', alt: 'facebook'},
    {img: '/icons/ok.svg', alt: 'ok'},
    {img: '/icons/vk.svg', alt: 'vk'},
    {img: '/icons/instagram.svg', alt: 'instagram'},
    {img: '/icons/twitter.svg', alt: 'twitter'},
    {img: '/icons/youtube.png', alt: 'youtube'},
]

interface Props {
    social: FooterSocialTS[];
    contacts: FooterContactTS[];
}

const Contacts: React.FC<Props> = ({social, contacts}) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <section className={s.wrapperSocialNetworks}>
                    {social?.map(item =>
                        <Link href={item.path} key={item.id}
                            className={s.circleDiv} 
                        >
                            <Image src={item.image} 
                                width={20} height={20} 
                                alt='' 
                            />
                        </Link>
                    )}
                </section>

                <section className={s.containerPhoneEmail} >
                    {contacts?.map(item =>
                        <div key={item.id}
                            className={s.wrapperContacts}
                        >
                            <Image
                                width={24} height={24}
                                src={item.image} alt=''
                            />
                            <div className={s.wrapperText} >
                                <p>{item.title}</p>
                                <Link
                                    href={item.path}
                                >
                                    {item.text}
                                </Link>
                            </div>
                        </div>
                    )}
                </section>
            </div>
            <p className={s.text}>© 2014-2021 «BM Technologies» ltd. | <a href="">Лиц. №2005290515 от НБКР</a></p>
        </div>
    );
};

export default Contacts;