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
import { getMainPage } from '@/api/service/main_Page';
import { useEffect, useState } from 'react';
import { Banner } from '@/api/service/main_Page/mainType';

export default function Slider() {

  const sizeDesktop = useMediaQuery()

  const [banners, setBanners] = useState<Banner>([]);

  async function fetchData() {
    try {
      const res = await getMainPage();
      setBanners(res.data.banners);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const bannersArray = banners || [];

  const stylesBg = {background: `url(${sizeDesktop ? bannersArray.background : bannersArray.background_mobile}) no-repeat center/cover #fff`}

  return (
    <Swiper
      navigation={sizeDesktop ? true : false} pagination={{clickable: true}}
      modules={[Navigation, Pagination]}
      loop={true}
    >
      <SwiperSlide style={stylesBg} className='BannerBg'>
        <div className='wrapperText'>
          <h4>{bannersArray.title}</h4>
          <div className='wrapperSubtext' >
            <div>
              <p>{bannersArray.key_1}</p>
              <span>{bannersArray.value_1}</span>
            </div>
            <div>
              <p>{bannersArray.key_2}</p>
              <span>{bannersArray.value_1}</span>
            </div>
          </div>
          {sizeDesktop && <Button color='blue'>{bannersArray.action_text}</Button>}
        </div>
        <div className={sizeDesktop ? '' : 'wrapperImg'}> 
          <Image src={bannersArray.image} width={sizeDesktop ? 920 : 320} height={sizeDesktop ? 460 : 140} alt='' className='CacheHand' />
        </div>
        {!sizeDesktop && <Button color='blue'>{bannersArray.action_text}</Button>}
      </SwiperSlide>  
      <SwiperSlide className='BannerBg'>
      </SwiperSlide>
      <SwiperSlide className='BannerBg'></SwiperSlide>
      <SwiperSlide className='BannerBg'></SwiperSlide>
    </Swiper>
  );
}
