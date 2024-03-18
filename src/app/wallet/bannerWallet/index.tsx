'use client'

import { BannerTS } from '@/api/service/wallet_Page/walletType';
import Button from '@/components/Button';
import Image from 'next/image';

import s from './bannerWallet.module.scss'
import { useMediaQuery } from '@/hook/useMediaQuery';

const BannerWallet = ({data}: {data: BannerTS}) => {

    const sizeDesktop = useMediaQuery()

    const styleBg = {background: `url(${data?.background}) no-repeat center/cover`}

    return (
        <section className={s.container} style={styleBg} >
            <div className={s.wrapper} >
                <div className={s.wrapperText} >
                    <div className={s.titleText} >
                        <h1>{data?.title}</h1>
                        <h2>{data?.text}</h2>
                    </div>
                    {sizeDesktop && 
                        <div className={s.wrapperButton} >
                            <p>{data?.download_text}</p>
                            <Button style={{background: data?.action_2_color}} >
                                <Image
                                    src={data?.action_1_image} 
                                    width={28} height={28}
                                    alt=''
                                />
                                {data?.action_1_text}
                            </Button>
                            <Button style={{background: data?.action_2_color}} >
                                <Image
                                    src={data?.action_2_image} 
                                    width={28} height={28}
                                    alt=''
                                />
                                {data?.action_2_text}
                            </Button>
                        </div>
                    }
                </div>

                <div className={s.imageStyle} >
                    <Image
                        width={640}
                        height={420}
                        src={data?.image}
                        alt=''
                    />
                </div>

                {!sizeDesktop && 
                    <div className={s.wrapperButton} >
                        <p>{data?.download_text}</p>
                        <Button style={{background: data?.action_2_color}} >
                            <Image
                                src={data?.action_1_image} 
                                width={sizeDesktop ? 28 : 18} height={sizeDesktop ? 28 : 18}
                                alt=''
                            />
                            {data?.action_1_text}
                        </Button>
                        <Button style={{background: data?.action_2_color}} >
                            <Image
                                src={data?.action_2_image} 
                                width={sizeDesktop ? 28 : 18} height={sizeDesktop ? 28 : 18}
                                alt=''
                            />
                            {data?.action_2_text}
                        </Button>
                    </div>
                }
            </div>
        </section>
    );
};

export default BannerWallet;