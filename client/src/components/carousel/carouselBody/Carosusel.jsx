import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,Navigation } from 'swiper/modules';
import CustomerCard from '../customerCard/CustomerCard';
import React, { useRef, useState } from 'react';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import "swiper/swiper-bundle.css";

export default function App() {
  const breakpoints = {
    350:{
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
 
  return (
    <div className='swiper'>
        <div className="navigate-btn">
            <div className="swiper-button-prev">
              <IoIosArrowRoundBack className="ArrowRoundBack" />
            </div>
            <div className="swiper-button-next">
              <IoIosArrowRoundForward className="ArrowRoundForward" />
            </div>
        </div>
      <Swiper
        slidesPerView={3.3} 
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={breakpoints}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
       
      >
       
         
        <SwiperSlide className='swiper-slider' > <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide className='swiper-slider' > <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide className='swiper-slider' > <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide className='swiper-slider' > <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide className='swiper-slider' > <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide className='swiper-slider'> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide className='swiper-slider'> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide className='swiper-slider'> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide className='swiper-slider'> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide className='swiper-slider'> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>

        
       
      </Swiper>
    </div>
  );
}
