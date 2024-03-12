import { SchemeTitleTS } from '@/api/service/processing/processType';

import DOMPurify from "isomorphic-dompurify";

import s from './schemeProcess.module.scss'


const SchemeProcess = ({data}: {data: SchemeTitleTS}) => {

    if(!data) {
        return null;
    }

    const schemeTitleList = data?.scheme_processing;

    return (
        <section className={s.container}>
            <h3>{data?.title}</h3>
            <h4>{data?.sub_title}</h4>
            <div className={s.wrapper} >
                {schemeTitleList?.map(item =>
                    <div
                        key={item.id} className={s.textList}
                    >
                        <h5 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.content)}}/>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SchemeProcess;