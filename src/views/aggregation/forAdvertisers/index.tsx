import { forAdvertisersAggregationTS, terminalAdvantagesAggregationTS } from '@/api/service/aggregation_Page/aggregation';
import DOMPurify from 'isomorphic-dompurify';

import s from './forAdvertisers.module.scss'

import Image from 'next/image';
import { headers } from 'next/headers';

import { useSizeByHeaders } from '@/shared/hook/useSizeMobile';
     
interface Props {
    forAdver: forAdvertisersAggregationTS;
    terminal: terminalAdvantagesAggregationTS;
}

const ForAdvertisers = ({forAdver, terminal}: Props) => {

    const { isMobile } = useSizeByHeaders(headers())

    const audience = forAdver?.audience

    return (
        <section className={s.container}>
            <h3>{forAdver?.title}</h3>
            <div className={s.wrapperText} >
                <p>{forAdver?.text_1}</p>
                <span>{forAdver?.text_2}</span>
                {audience?.map(item =>
                    <div
                        key={item.id}
                        className={s.roundDivText}
                    >
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                    </div>
                )}
                <p>{forAdver?.text_3}</p>
            </div>            
            <div className={s.wrapperImage} >
                {!isMobile && 
                    <Image
                        width={320} height={530}
                        src={terminal?.image} alt=''
                    />
                }
                <div className={s.wrapperImageText}>
                    <p>{forAdver?.text_4}</p>
                    <h5>{terminal.title}</h5>
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(terminal?.text)}}/>
                </div>
            </div>
        </section>
    );
};

export default ForAdvertisers;