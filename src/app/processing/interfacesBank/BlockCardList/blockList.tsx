import { Interfaces } from '@/api/service/processing/processType';

import DOMPurify from "isomorphic-dompurify";

import Image from 'next/image';

import s from './blockList.module.scss'

const BlockList = ({
    title,
    image,
    content
}: Interfaces ) => {

    const cleanedHTML = DOMPurify.sanitize(content);
    
    return (
        <div className={s.containerPadding} >
            <div className={s.iconRadous} ><Image src={image} width={56} height={56} alt='' /></div>
            <div className={s.styleText} >
                <p>{title}</p>
                <div dangerouslySetInnerHTML={{__html: cleanedHTML}} />
            </div>
        </div>
    );
};

export default BlockList;