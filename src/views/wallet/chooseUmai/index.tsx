import { AdvantagesTS } from '@/api/service/wallet_Page/walletType';
import Image from 'next/image';

import s from './chooseUmai.module.scss'

const ChooseUmai = ({data}: {data: AdvantagesTS}) => {

    const walletAdvantages = data?.wallet_advantages

    return (
        <section className={s.container}>
            <h4>{data?.title}</h4>
            <div className={s.wrapperContainer} >
                {walletAdvantages?.map(item =>
                    <div
                        key={item.id}
                        className={s.wrapper}
                    >
                        <Image
                            src={item.image}
                            width={56} height={56}
                            alt=''
                        />
                        <p>{item.text}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ChooseUmai;