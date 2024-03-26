import { BannerTS } from '@/api/service/wallet_Page/walletType';

import Button from '@/shared/components/Button';

import { useSizeByHeaders } from '@/shared/hook/useSizeMobile';

import { headers } from 'next/headers';
import Image from 'next/image';

import s from './bannerWallet.module.scss'

const BannerWallet = ({data}: {data: BannerTS}) => {

    const { isMobile } = useSizeByHeaders(headers())

    const styleBg = {background: `url(${data?.background}) no-repeat center/cover`}

    return (
        <section className={s.container} style={styleBg} >
            <div className={s.wrapper} >
                <div className={s.wrapperText} >
                    <div className={s.titleText} >
                        <h1>{data?.title}</h1>
                        <h2>{data?.text}</h2>
                    </div>
                    {!isMobile && 
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

                {isMobile && 
                    <div className={s.wrapperButton} >
                        <p>{data?.download_text}</p>
                        <Button style={{background: data?.action_2_color}} >
                            <Image
                                src={data?.action_1_image} 
                                width={isMobile ? 18 : 28} height={isMobile ? 18 : 28}
                                alt=''
                            />
                            {data?.action_1_text}
                        </Button>
                        <Button style={{background: data?.action_2_color}} >
                            <Image
                                src={data?.action_2_image} 
                                width={isMobile ? 18 : 28} height={isMobile ? 18 : 28}
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