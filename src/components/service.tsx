"use client"
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { MdOutlineHandshake, MdOutlineStars } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import Card from './card';
function Service() {
  return (
    <div id='service' className='w-[90%] mx-auto min-h-screen flex flex-col space-y-8 justify-center items-center'>
      <h1 className="text-start text-[42px] font-extrabold "><span className="">Our Services</span></h1>
      <div className='hidden flex-[0.65] w-full lg:flex items-center justify-center space-x-5'>
            <Card name="STARTER" price={3500000} custom={false} />
            <Card name="BUSINESS" price={4000000} custom={false} />
            <Card name="CUSTOM" price={3500000} custom={true} />
      </div>   
      {/* sm */}
      <Swiper
      slidesPerView={1.2}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={true}
        modules={[ Autoplay, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <Card name="STARTER" price={3500000} custom={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Card name="BUSINESS" price={4000000} custom={false} />
        </SwiperSlide>
        <SwiperSlide>
          <Card name="CUSTOM" price={3500000} custom={true} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Service