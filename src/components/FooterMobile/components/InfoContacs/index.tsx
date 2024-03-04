'use client'

import React from 'react';

import s from './infoContacts.module.scss'
import { IMenu } from '@/types/common';
import ListDropDown from '@/components/ListDropDown';
import { useRouter } from 'next/navigation';
import { CLIENT_LIST } from '@/constants/sidebar-list/client-list';
import { INFORMATION_LIST } from '@/constants/sidebar-list/information-list';
import Icon from '@/UI/Icon';

const arrayIcons = [
    {img: '/icons/facebook.svg', alt: 'facebook'},
    {img: '/icons/ok.svg', alt: 'ok'},
    {img: '/icons/vk.svg', alt: 'vk'},
    {img: '/icons/instagram.svg', alt: 'instagram'},
    {img: '/icons/twitter.svg', alt: 'twitter'},
    {img: '/icons/youtube.png', alt: 'youtube'},
]

const InfoContacs = () => {

    const navigate = useRouter();

    const goToPage = (path: { title: string; value: string }) => {
        navigate.push(path.value)
    }

    const renderMenuItem = (item: IMenu) => {
        if (item?.children?.length) {
            return (
                <ListDropDown
                    key={item.title}
                    onClick={goToPage}
                    icon={item.icon}
                    title={item.title}
                    list={item?.children}
                />
            )
        }
    }
    
    return (
        <section className={s.container}>
            <div className={s.radiosTopInfo}>
                <ul>
                    <li>Карьера (вакансии)</li>
                    <li>Контакты</li>
                </ul>
                <div>
                    {CLIENT_LIST.map(item => renderMenuItem(item))}
                    <hr className='mt-2 mb-2' />
                    {INFORMATION_LIST.map(item => renderMenuItem(item))}
                </div>
            </div>
            <div className={s.socialMedia}>
                <div className={s.whatsAppContacts}>
                    <Icon width={24} height={24} srcImg='/icons/whatsapp.svg' />
                    <div className={s.wrapperText}>
                        <p>WhatsApp</p>
                        <span>+996 (501) 110 022</span>
                    </div>
                </div>
                <div className={s.socialMediaRound}>
                    {arrayIcons.map(item =>
                        <button className={s.circleDiv} key={item.img}>
                            <Icon srcImg={item.img} width={20} height={20} alt={item.alt} />
                        </button>    
                    )}
                </div>
            </div>
            <div className={s.privacyPolicy}>
                <p>© 2014-2021 «BM Technologies» ltd. | <a href="">Лиц. №2005290515 от НБКР</a> </p>
            </div>
        </section>
    );
};

export default InfoContacs;