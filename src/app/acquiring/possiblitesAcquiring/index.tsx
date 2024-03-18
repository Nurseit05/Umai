'use client'

import { possiblitesAcquiringTS } from '@/api/service/acquiring_Page/acquiring';

import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';

import { useMediaQuery } from '@/hook/useMediaQuery';

import s from './possiblitesAcquiring.module.scss'


const PossiblitesAcquiring = ({data}: {data: possiblitesAcquiringTS}) => {

    const sizeDesktop = useMediaQuery()

    return (
        <section className={s.container} >
            <div className={s.wrapperText} >
                <h4>{data?.title}</h4>
                <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data?.text)}} />
            </div>
            {sizeDesktop && <Image
                    src={data?.image} alt=''
                    width={340} height={515}
                />
            }
        </section>
    );
};

export default PossiblitesAcquiring;