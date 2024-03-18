import { advantagesTitleAcquiringTS } from '@/api/service/acquiring_Page/acquiring';
import Image from 'next/image';

import s from './advantagesTitleAcquiring.module.scss'

const AdvantagesTitleAcquiring = ({data}: {data: advantagesTitleAcquiringTS}) => {

    const acquiringAdvantagesArray = data?.acquiring_advantages;

    return (
        <section className={s.container} >
            <h4>{data?.title}</h4>
            <div className={s.wrapper} >
                {acquiringAdvantagesArray?.map(item =>
                    <div
                        key={item.id}
                        className={s.wrapperImage}
                    >
                        <Image
                            src={item.image} alt=''
                            width={36} height={36}
                        />
                        <p>{item.text}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AdvantagesTitleAcquiring;