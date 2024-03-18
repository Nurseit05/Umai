import { ProcessingSystemTS } from '@/api/service/processing/processType';

import s from './blockTextList.module.scss'
import Image from 'next/image';

const BlockTextList = ({ text, image }: ProcessingSystemTS) => {

    return (
        <div className={s.wrapper}>
            <div className={s.RoundNumberImg}>
                <Image
                    src={image}
                    width={40}
                    height={40}
                    alt=''
                />
            </div>
            <p>{text}</p>
        </div>
    );
};

export default BlockTextList;