import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import card_1 from "../../../public/card_1.jpg";
import card_2 from "../../../public/card_2.jpg";
import card_3 from "../../../public/card_3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonialSlider.css";

import { Pagination } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper 
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pt-10"
      >
        <SwiperSlide>
          <div className="bg-blue-400">
            <img src={card_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-400">
            <img src={card_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-400">
            <img src={card_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-400">
            <img src={card_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-400">
            <img src={card_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-400">
            <img src={card_1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
