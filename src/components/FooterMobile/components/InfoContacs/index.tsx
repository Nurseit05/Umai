import Image from 'next/image';

import RenderListDrop from './renderListDrop';

import s from './infoContacts.module.scss'

const arrayIcons = [
    {img: '/icons/facebook.svg', alt: 'facebook'},
    {img: '/icons/ok.svg', alt: 'ok'},
    {img: '/icons/vk.svg', alt: 'vk'},
    {img: '/icons/instagram.svg', alt: 'instagram'},
    {img: '/icons/twitter.svg', alt: 'twitter'},
    {img: '/icons/youtube.png', alt: 'youtube'},
]

const InfoContacs = () => {

    return (
        <section className={s.container}>
            <div className={s.radiosTopInfo}>
                <ul>
                    <li>Карьера (вакансии)</li>
                    <li>Контакты</li>
                </ul>
                <RenderListDrop/>
            </div>
            <div className={s.socialMedia}>
                <div className={s.whatsAppContacts}>
                    <Image alt='' width={24} height={24} src='/icons/whatsapp.svg' />
                    <div className={s.wrapperText}>
                        <p>WhatsApp</p>
                        <span>+996 (501) 110 022</span>
                    </div>
                </div>
                <div className={s.socialMediaRound}>
                    {arrayIcons.map(item =>
                        <button className={s.circleDiv} key={item.img}>
                            <Image src={item.img} width={20} height={20} alt={item.alt} />
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