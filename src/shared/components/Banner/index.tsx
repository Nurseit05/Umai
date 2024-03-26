import Image from 'next/image';

import s from './Banner.module.scss'
import clsx from 'clsx';
import { useSizeByHeaders } from '@/shared/hook/useSizeMobile';
import { headers } from 'next/headers';

interface Props {
    title: string,
    subtitle?: string,
    width: number,
    height: number,
    imgSrc: string,
    image_mobile?: string;
    backgroundUrl?: string,
    wrapperClass?: string
}

const Banner = ({
    title, subtitle,
    width, height,
    imgSrc,
    image_mobile,
    backgroundUrl,
    wrapperClass
}: Props) => {
 
    const { isMobile } = useSizeByHeaders(headers())

    const stylesBg = {background: backgroundUrl ? `url(${backgroundUrl}) no-repeat center/cover #F7F7F8` : '#f7f7f8'}

    return (
        <div className={clsx(s.wrapper, wrapperClass)} style={stylesBg}>
            {subtitle ? (
                    <div className={s.wrapperText}>
                        <h4>{title}</h4>
                        <p>{subtitle}</p>
                    </div>
                )
                : (
                    <h4>{title}</h4>
                )
            }
            <Image 
                width={width} height={height}
                alt=''
                src={!isMobile ? imgSrc : (image_mobile ? image_mobile : imgSrc)}
            />
        </div>
    );
};

export default Banner;