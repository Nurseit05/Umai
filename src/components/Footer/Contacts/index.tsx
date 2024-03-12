import Image from 'next/image';

import s from './contacts.module.scss'
import clsx from 'clsx';
import { Images } from '@/components/Imges';

const arrayIcons = [
    {img: '/icons/facebook.svg', alt: 'facebook'},
    {img: '/icons/ok.svg', alt: 'ok'},
    {img: '/icons/vk.svg', alt: 'vk'},
    {img: '/icons/instagram.svg', alt: 'instagram'},
    {img: '/icons/twitter.svg', alt: 'twitter'},
    {img: '/icons/youtube.png', alt: 'youtube'},
]

const Contacts = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            <div className='flex gap-18'>
                <section className='flex gap-4'>
                    {arrayIcons.map(item =>
                        <button className={s.circleDiv} key={item.img}>
                            <Image src={item.img} width={20} height={20} alt={item.alt} />
                        </button>    
                    )}
                </section>

                <section className={s.containerPhoneEmail}>
                    <div className='flex gap-x-3 items-start'>
                        <Image width={24} height={24} alt='' src='/icons/whatsapp.svg' />
                        <div className='flex flex-col gap-y-1'>
                            <p>WhatsApp</p>
                            <span>+996 (501) 110 022</span>
                        </div>
                    </div>
                    <div className='flex gap-x-3 items-start'>
                        <div className={clsx(s.circleDiv, s.blueDiv)}>
                            <Image width={14} height={14} alt='' src='/icons/phone.svg' />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <p>Телефон</p>
                            <span>+996 (774) 110 022</span>
                            <span>+996 (501) 110 022</span>
                        </div>
                    </div>
                </section>

                <section className={s.containerPhoneEmail}>
                    <div className='flex gap-x-3 items-start'>
                        <div className={clsx(s.circleDiv, s.blueDiv)}>
                            <Image width={14} height={14} alt='' src='/icons/mapWhite.svg' />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <p>WhatsApp</p>
                            <span>+996 (501) 110 022</span>
                        </div>
                    </div>
                    <div className='flex gap-x-3 items-start'>
                        <div className={clsx(s.circleDiv, s.blueDiv)}>
                            <Images width={14} height={14} alt='' imgSrc='/icons/email.svg'/>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <p>Телефон</p>
                            <span>+996 (774) 110 022</span>
                            <span>+996 (501) 110 022</span>
                        </div>
                    </div>
                </section>
            </div>
            <p className={s.text}>© 2014-2021 «BM Technologies» ltd. | <a href="">Лиц. №2005290515 от НБКР</a></p>
        </div>
    );
};

export default Contacts;