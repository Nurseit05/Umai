import { AdvantageDetailTS } from '@/api/service/processing/processType';

import s from './blockTextList.module.scss'

const BlockTextList = ({ text, id }: AdvantageDetailTS) => {

    return (
        <div className={s.wrapper}>
            <div className={s.RoundNumberImg}>
                {id?.toString()}
            </div>
            <p>{text}</p>
        </div>
    );
};

export default BlockTextList;