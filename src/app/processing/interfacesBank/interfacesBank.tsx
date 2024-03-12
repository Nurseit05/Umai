import React, { useEffect, useState } from 'react';

import BlockList from './BlockCardList/blockList';

import { Interfaces_titleTS } from '@/api/service/processing/processType';

import Banner from '@/components/Banner';

import s from './interfacesBank.module.scss';

const InterfacesBank = async ({data}: {data: Interfaces_titleTS}) => {

  if (!data) {
    return null;
  }

  const bankInterfaseBank = data?.interfaces;

  return (
    <section className={s.container}>
      <Banner 
        title={data?.title} 
        imgSrc={data?.image} 
        width={325} height={140}
        wrapperClass={s.wrapperBanner}    
      />
      <h4>{data?.sub_title}</h4>
      <div className={s.wrapper}>
        {bankInterfaseBank?.map(item => 
          <BlockList
            key={item.id}
            title={item.title} 
            image={item.image}
            content={item.content}
          />    
        )}
      </div>
    </section>
  );
};

export default InterfacesBank;
