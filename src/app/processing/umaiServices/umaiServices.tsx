import React from 'react';

import { AdvantagesTS } from '@/api/service/processing/processType';

import Banner from '@/components/Banner';

import BlockTextList from './BlockTextList/blockTextList';

import s from './umaiServices.module.scss';

const UmaiServices = ({data}: {data: AdvantagesTS}) => {

    if (!data) {
        return null;
    }

    const bankInterfaseBank = data?.advantages_block;

    return (
        <section className={s.container}>
            <Banner
                title={data?.title}
                imgSrc={data?.image}
                width={220}
                height={170}
                wrapperClass={s.wrapperBanner}
            />
            <div className={s.textListMargin}>
                {bankInterfaseBank?.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <BlockTextList  text={item.text} id={item.id} />
                        {index !== bankInterfaseBank.length - 1 && <hr />}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default UmaiServices;
