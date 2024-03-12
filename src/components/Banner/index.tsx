import Image from 'next/image';

import s from './Banner.module.scss'
import clsx from 'clsx';

interface Props {
    title: string,
    subtitle?: string,
    width: number,
    height: number,
    imgSrc: string,
    backgroundUrl?: string,
    wrapperClass?: string
}

const Banner = ({
    title, subtitle,
    width, height,
    imgSrc,
    backgroundUrl,
    wrapperClass
}: Props) => {

    const stylesBg = {background: backgroundUrl ? `url(${backgroundUrl}) no-repeat center/cover #F7F7F8` : '#f7f7f8'}

    return (
        <div className={clsx(s.wrapper, wrapperClass)} style={stylesBg}>
            {subtitle ? (
                    <div className={s.wrapperText}>
                        <h5>{title}</h5>
                        <p>{subtitle}</p>
                    </div>
                )
                : (
                    <h5>{title}</h5>
                )
            }
            <Image 
                width={width} height={height}
                alt=''
                src={imgSrc}
            />
        </div>
    );
};

export default Banner;