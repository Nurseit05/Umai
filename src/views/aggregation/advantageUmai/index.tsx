import { advantagesTitleAggregationTS } from '@/api/service/aggregation_Page/aggregation';
import Image from 'next/image';

import s from './advantageUmai.module.scss'

const AdvantageUmai = ({data}: {data: advantagesTitleAggregationTS}) => {

    if(!data) {
        return null
    }

    const advantages = data?.advantages

    return (
        <section className={s.container} >
            <h3>{data?.title}</h3>
            <div className={s.wrapperList} >
                {advantages?.map(item =>
                    <div 
                        key={item.id}
                        className={s.wrapperText}
                    >
                        <div>
                            <Image
                                width={36} height={36}
                                src={item.image} alt=''
                            />
                            <h4>{item.title}</h4>
                        </div>
                        <p>{item.text}</p>
                    </div>                
                )}
            </div>
        </section>
    );
};

export default AdvantageUmai;