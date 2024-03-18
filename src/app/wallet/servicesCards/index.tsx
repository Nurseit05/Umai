import { ServicesTS } from '@/api/service/wallet_Page/walletType';

import s from './services.module.scss'
import CardsList from './cardsList';

const ServicesCards = ({data}: {data: ServicesTS[]}) => {
    return (
        <section className={s.container} >
            {data?.map(item => 
                <CardsList
                    key={item.id}
                    title={item.title}
                    text={item.text}
                    image={item.image}
                    background={item.background}
                />
            )}
        </section>
    );
};

export default ServicesCards;