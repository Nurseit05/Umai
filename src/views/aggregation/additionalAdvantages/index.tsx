import { additionalAdvantagesAggregationTS } from '@/api/service/aggregation_Page/aggregation';
import Image from 'next/image';

import s from './additionalAdvantages.module.scss'
import { useSizeByHeaders } from '@/shared/hook/useSizeMobile';
import { headers } from 'next/headers';

const AdditionalAdvantages = ({data}: {data: additionalAdvantagesAggregationTS}) => {

    const additionalAdvantagesArray = data?.additional_advantages;

    const { isMobile } = useSizeByHeaders(headers())

    return (
        <section className={s.container} >
            <h3>{data?.title}</h3>
            <div className={s.wrapper} >
                {additionalAdvantagesArray?.map(item =>
                    <div
                        key={item.id}
                        className={s.wrapperText}
                    >
                        <p>{item.text}</p>
                        {!isMobile && <Image
                            src={item.image} alt=''
                            width={180} height={185} 
                        />}                    
                    </div>
                )}
            </div>
        </section>
    );
};

export default AdditionalAdvantages;