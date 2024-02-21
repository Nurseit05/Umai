// Slide.tsx
import React from 'react';
import s from './banner.module.scss';
import Slider from '@/components/Slider';

const Slide = () => {
  const slideItems = [
    './banner.jpg',
    './banner.jpg',
    './banner.jpg',
    './banner.jpg'
  ];

  return (
    <>
      <Slider items={slideItems} />
    </>
  );
};

export default Slide;