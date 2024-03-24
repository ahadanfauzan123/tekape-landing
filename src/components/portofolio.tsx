"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from "swiper"

import Image from 'next/image';
import Project1 from "../../public/img/banner/banner1.png"

function Portofolio() {
      return (
    <div id='portofolio' className='mt-[120px]  w-screen py-12 flex flex-col items-center justify-start space-y-12'>
      <h1 className="text-4xl z-20 font-extrabold leading-[50px]"><span className="">PORTOFOLIO</span></h1>
      {/* <div className='w-[80%] mx-auto flex items-start justify-center space-x-5'> */}
      <div className='w-full lg:w-[80%] mx-auto flex flex-col space-y-[100px]'>
      <Swiper
      navigation={true}
      loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-[calc(100%+50px)] lg:w-full sm:h-[300px] lg:h-[550px] rounded-2xl bg-white shadow-md shadow-gray-300 flex flex-col items-start justify-start space-y-4'>
                  <Image quality={90} src={Project1} alt="project" width={800} height={500} className='w-full h-[400px] object-cover rounded-t-2xl' />
                  <div className='flex flex-col space-y-2 h-[150px] items-start justify-start ml-[10px] '>
                        <h1 className='text-2xl text-gray-700'>PERPENKA</h1>
                        <h1 className='text-lg text-gray-400'>Landing Page PERPENKA</h1>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[calc(100%+50px)] lg:w-full sm:h-[300px] lg:h-[550px] rounded-2xl bg-white shadow-md shadow-gray-300 flex flex-col items-start justify-start space-y-4'>
                  <Image quality={90} src={Project1} alt="project" width={800} height={500} className='w-full h-[400px] object-cover rounded-t-2xl' />
                  <div className='flex flex-col space-y-2 h-[150px] items-start justify-start ml-[10px] '>
                        <h1 className='text-2xl text-gray-700'>PAMA</h1>
                        <h1 className='text-lg text-gray-400'>Landing Page PAMA</h1>
                  </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[calc(100%+50px)] lg:w-full sm:h-[300px] lg:h-[550px] rounded-2xl bg-white shadow-md shadow-gray-300 flex flex-col items-start justify-start space-y-4'>
                  <Image quality={90} src={Project1} alt="project" width={800} height={500} className='w-full h-[400px] object-cover rounded-t-2xl' />
                  <div className='flex flex-col space-y-2 h-[150px] items-start justify-start ml-[10px] '>
                        <h1 className='text-2xl text-gray-700'>WEBGET</h1>
                        <h1 className='text-lg text-gray-400'>Landing Page WEBGET</h1>
                  </div>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
      </div>
    </div>
  )
}

export default Portofolio