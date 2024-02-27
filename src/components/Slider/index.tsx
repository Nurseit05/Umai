'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'

import { Navigation, Pagination } from 'swiper/modules';
import Button from '../Button';
import Image from 'next/image';

export default function Slider() {

  return (
    <Swiper
      navigation={true} pagination={{clickable: true}}
      modules={[Navigation, Pagination]} 
      loop={true}
    >
      <SwiperSlide className='BannerBg'>
        <div className='wrapperText'>
          <h1>Нас уже 46 000 кошелька!</h1>
          <div className='wrapperSubtext' >
            <div>
              <p>Cумма открытия</p>
              <span>0 сом!</span>
            </div>
            <div>
              <p>Срок открытия</p>
              <span>1 рабочая неделя</span>
            </div>
          </div>
          <Button color='blue'>Открыть кошелек</Button>
        </div>
        <Image src='/CacheHand.svg' width={920} height={459} alt='' className='CacheHand' />
      </SwiperSlide>
      <SwiperSlide className='BannerBg'></SwiperSlide>
      <SwiperSlide className='BannerBg'></SwiperSlide>
      <SwiperSlide className='BannerBg'></SwiperSlide>
    </Swiper>
  );
}
