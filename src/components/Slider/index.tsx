'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './slider.scss'

import { Navigation, Pagination } from 'swiper/modules';
import Button from '../Button';
import Image from 'next/image';
import { useMediaQuery } from '@/hook/useMediaQuery';
import { Main_PageApi } from '@/api/service/main_Page';
import { useEffect, useState } from 'react';
import { Banner } from '@/api/service/main_Page/type';

export default function Slider() {

  const sizeDesktop = useMediaQuery()

  const [banners, setBanners] = useState<Banner[]>([]);

  async function fetchData() {
    try {
      const res = await Main_PageApi.getMainPage();
      setBanners(res.data.banners);
    } catch (error) {
    console.log(error);
  }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const bannersArray = banners || [];

  return (
    <Swiper
      navigation={sizeDesktop ? true : false} pagination={{clickable: true}}
      modules={[Navigation, Pagination]}
      loop={true}
    >
      {bannersArray.map(item => 
        <SwiperSlide key={item.id} className='BannerBg'>
          <div className='wrapperText'>
            <h4>{item.title}</h4>
            <div className='wrapperSubtext' >
              <div>
                <p>{item.key_1}</p>
                <span>{item.value_1}</span>
              </div>
              <div>
                <p>{item.key_2}</p>
                <span>{item.value_1}</span>
              </div>
            </div>
            {sizeDesktop && <Button color='blue'>{item.action_text}</Button>}
          </div>
          <div className={sizeDesktop ? '' : 'wrapperImg'}>
            <Image src='/CacheHand.svg' width={sizeDesktop ? 920 : 320} height={sizeDesktop ? 460 : 140} alt='' className='CacheHand' />
          </div>
          {!sizeDesktop && <Button color='blue'>{item.action_text}</Button>}
        </SwiperSlide>  
      )}
      <SwiperSlide className='BannerBg'>
      </SwiperSlide>
      <SwiperSlide className='BannerBg'></SwiperSlide>
      <SwiperSlide className='BannerBg'></SwiperSlide>
    </Swiper>
  );
}
