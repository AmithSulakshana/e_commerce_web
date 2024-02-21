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
        slidesPerView={3.4} 
        centeredSlides={true}
        spaceBetween={30}
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
       
         
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>
        <SwiperSlide style={{width:"400px"}}> <CustomerCard rate={4.5} userName="Amith S." comment="very nice" /></SwiperSlide>

        
       
      </Swiper>
    </div>
  );
}
