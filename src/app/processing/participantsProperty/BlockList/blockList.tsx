import { ParticipantTS } from '@/api/service/processing/processType';

import Image from 'next/image';

import s from './blockList.module.scss'


const BlockList = ({
    image,
    title,
    text
}: ParticipantTS) => {
    return (
        <div className={s.wrapper} >
            <div className={s.wrapperImage} >
                <Image
                    src={image}
                    width={150} height={150}
                    alt=''
                />
            </div>
            <h5>{title}</h5>
            <p>{text}</p>
        </div>
    );
};

export default BlockList;