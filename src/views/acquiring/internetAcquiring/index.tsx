import { internetAcquiringTS } from '@/api/service/acquiring_Page/acquiring';
import DOMPurify from 'isomorphic-dompurify';

import Image from 'next/image';

import s from './internetAcquiring.module.scss'

const InternetAcquiring = ({data}: {data: internetAcquiringTS}) => {

    if(!data) {
        return null;
    }

    return (
        <section className={s.container} >
            <h4>{data?.title}</h4>
            <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data?.text)}} />
            <div className={s.wrapperImage} >
                <Image
                    src={data?.image}
                    width={206} height={160}
                    alt=''
                />
                <span>{data?.text_2}</span>
            </div>
        </section>
    );
};

export default InternetAcquiring;