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
import { motion, Variants } from 'framer-motion';
import Card from './card';

function Service() {
  const titleVariant1: Variants = {
    offscreen: {
      x: -50,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 1.4
      }
    }
  };  
  return (
    <div id='service' className='w-[90%] mx-auto min-h-screen flex flex-col space-y-8 justify-center items-center'>
      <h1 className="text-start text-[42px] font-extrabold "><span className="">Our Services</span></h1>
      <motion.div
      initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant1}
      className='hidden flex-[0.65] w-full lg:flex items-center justify-center space-x-5'>
            <Card deliveryDays={2} name="STARTER" price={3500000} custom={false} pages={5} dynamic={true} uiux={true} revision={1} domain={true} ssl={true} bandwith={10} storage={5} socialMedia={false} />
            <Card deliveryDays={2} name="BUSINESS" price={4000000} custom={false} pages={8} dynamic={true} uiux={true} revision={2} domain={true} ssl={true} bandwith={20} storage={10} socialMedia={true} />
            <Card deliveryDays={2} name="CUSTOM" price={3500000} custom={true} pages={9} dynamic={true} uiux={false} revision={5} domain={true} ssl={true} bandwith={30} storage={20} socialMedia={true} />
      </motion.div>   
      {/* sm */}
      <motion.div
      initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={titleVariant1}
      className=' w-screen flex lg:hidden'>
        <Swiper
        slidesPerView={1.2}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={true}
          modules={[ Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card deliveryDays={2} name="STARTER" price={3500000} custom={false} pages={5} dynamic={true} uiux={true} revision={1} domain={true} ssl={true} bandwith={10} storage={5} socialMedia={false} />
          </SwiperSlide>
          <SwiperSlide>
            <Card deliveryDays={2} name="BUSINESS" price={4000000} custom={false} pages={8} dynamic={true} uiux={true} revision={2} domain={true} ssl={true} bandwith={20} storage={10} socialMedia={true} />
          </SwiperSlide>
          <SwiperSlide>
            <Card deliveryDays={2} name="CUSTOM" price={3500000} custom={true} pages={9} dynamic={true} uiux={false} revision={5} domain={true} ssl={true} bandwith={30} storage={20} socialMedia={true} />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  )
}

export default Service