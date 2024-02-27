import Image from "next/image"

import s from './style.module.scss'

interface Props {
    width: number,
    height: number,
    alt: string,
    imgSrc: string
}

export const Images = ({ width, height, alt, imgSrc }: Props) => (
    <Image className={s.WH} width={width} height={height} alt={alt} src={imgSrc} />
);
