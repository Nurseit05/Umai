import DOMPurify from 'isomorphic-dompurify';

import Button from '../Button';
import Image from 'next/image';

import s from './cardsDefault.module.scss'
import { headers } from 'next/headers';
import { useSizeByHeaders } from '@/hook/useSizeMobile';

interface Props  {
    title: string, 
    subtitle: string,
    imgSrc: string,
    button?: boolean,
    backgroundUrl?: string
}

const CardsDefault = ({
    title, 
    subtitle, 
    button,
    imgSrc,
    backgroundUrl
}: Props) => {

    const { isMobile } = useSizeByHeaders(headers())

    const cleanedHTML = DOMPurify.sanitize(title);

    const stylesBg = {background: backgroundUrl ? `url(${backgroundUrl}) no-repeat center/cover` : ''}

    return (
        <section style={stylesBg} className={s.container}>
            <div className={s.wrapperText}>
                <p className={s.text}>
                    <h5 dangerouslySetInnerHTML={{__html: cleanedHTML}}/>
                    {subtitle && <span>{subtitle}</span>}
                </p>
                {isMobile && <Image src={imgSrc} height={200} width={200} alt='' />}
                <Button
                    round={button}
                    className={button ? s.buttonRound : s.button}
                >
                    {button ? 'Подробнее' : 'Смотреть на карте'}
                </Button>
            </div>
            {!isMobile && <Image height={300} width={300} src={imgSrc}  alt='' />}
        </section>  
    );
};

export default CardsDefault;