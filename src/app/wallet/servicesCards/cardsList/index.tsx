import { ServicesTS } from '@/api/service/wallet_Page/walletType';
import s from './cardsList.module.scss'
import Image from 'next/image';

const CardsList = ({
    title,
    text,
    image,
    background,
}: ServicesTS) => {

    const styleBg = {background: `url(${background}) no-repeat center/cover`}

    return (
        <div style={styleBg} className={s.wrapper} >
            <div className={s.wrapperText} >
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <Image
                src={image}
                width={280} height={300}
                alt=''
            />
        </div>
    );
};

export default CardsList;