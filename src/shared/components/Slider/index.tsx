// // 'use client'

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';

// import './slider.scss'

// import { Navigation, Pagination } from 'swiper/modules';

// import Button from '../Button';

// import { Banner } from '@/api/service/main_Page/mainType';

// import { useFetch } from '@/hook/useFetch';

// import Image from 'next/image';
// import { headers } from 'next/headers';
// import { useSizeByHeaders } from '@/hook/useSizeMobile';

// export default function Slider() {
//   const { isMobile } = useSizeByHeaders(headers())

//   const mainPage = useFetch({ URL: 'mainpage/get_main/'})
//   const banner = mainPage?.banners;

//   return (
//     <Swiper
//       navigation={!isMobile ? true : false} pagination={{clickable: true}}
//       modules={[Navigation, Pagination]}
//       loop={true}
//     >
//       {banner?.map(({item, index}: { item: Banner, index: number}) => 
//         <SwiperSlide 
//             style={{backgroundImage: `url(${!isMobile ? item.background : item.background_mobile})`}} 
//             className='BannerBg' key={index}
//         >
//           <div className='wrapperText'>
//             <h4>{item.title}</h4>
//             <div className='wrapperSubtext' >
//               <div>
//                 <p>{item.key_1}</p>
//                 <span>{item.value_1}</span>
//               </div>
//               <div>
//                 <p>{item.key_2}</p>
//                 <span>{item.value_1}</span>
//               </div>
//             </div>
//             {!isMobile && <Button color='blue'>{item.action_text}</Button>}
//           </div>
//           <div className={!isMobile ? '' : 'wrapperImg'}> 
//             <Image src={item.image} width={!isMobile ? 920 : 320} height={!isMobile ? 460 : 140} alt='' className='CacheHand' />
//           </div>
//           {isMobile && <Button color='blue'>{item.action_text}</Button>}  
//         </SwiperSlide>  
//       )}
//       <SwiperSlide className='BannerBg'>
//       </SwiperSlide>
//       <SwiperSlide className='BannerBg'></SwiperSlide>
//       <SwiperSlide className='BannerBg'></SwiperSlide>
//     </Swiper>
//   );
// }
