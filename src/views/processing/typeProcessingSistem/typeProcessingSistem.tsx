import { SystemsTitleTS } from '@/api/service/processing/processType';

import BlockTextList from './BlockTextList/blockTextList';

import s from './typeProcessingSistem.module.scss'

const TypeProcessingSistem = ({data}: {data: SystemsTitleTS}) => {

    if (!data) {
        return null;
    }

    const systemsTitleList = data?.types_systems;

    return (
        <section className={s.container} >
            <h3>{data?.title}</h3>
            <h4>{data?.sub_title}</h4>
            <div className={s.wrapperList} >
                {systemsTitleList.map(item => 
                    <BlockTextList
                        key={item.id}
                        image={item.image}
                        text={item.text}
                    />
                )}
            </div>
            <p>{data?.text_bottom}</p>
        </section>
    );
};

export default TypeProcessingSistem;