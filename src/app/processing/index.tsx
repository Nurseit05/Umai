"use client"

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hook/useMediaQuery';

import { getProcessData } from '@/api/service/processing';
import { banner } from '@/api/service/processing/processType';

import Banner from '@/components/Banner';
import UnderTextBanner from '@/components/BannerUnderText';

import s from './processing.module.scss';

export const Processing = () => {
  const [bannerData, setBannerData] = useState<banner>();
  const sizeDesktop = useMediaQuery();

  const fetchData = async () => {
    try {
      const res = await getProcessData();
      setBannerData(res.data.banner);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(!bannerData) {
    return null
  }

  return (
    <>
      {bannerData && (
        <Banner
          width={273}
          height={205}
          title={bannerData.title}
          subtitle={bannerData.text}
          imgSrc={bannerData.image}
          backgroundUrl={bannerData.background}
        />
      )}
      <UnderTextBanner/>
      {/* <Main /> */}
    </>
  );
};
