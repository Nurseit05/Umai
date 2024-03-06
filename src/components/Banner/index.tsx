import Image from 'next/image';

import s from './Banner.module.scss'

interface Props {
    title: string,
    subtitle: string,
    width: number,
    height: number,
    imgSrc: string,
    backgroundUrl?: string
}

const Banner = ({
    title, subtitle,
    width, height,
    imgSrc,
    backgroundUrl
}: Props) => {

    const stylesBg = {background: backgroundUrl ? `url(${backgroundUrl}) no-repeat center/cover #F7F7F8` : '#f7f7f8'}

    return (
        <section className={s.container}>
            <div className={s.wrapper} style={stylesBg}>
                <section className={s.wrapperText}>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </section>
                <Image 
                    width={width} height={height}
                    alt=''
                    src={imgSrc}
                />
            </div>
        </section>
    );
};

export default Banner;