import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <>
      <Swiper 
      pagination={true} 
      navigation={true} 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation, Pagination]} 
      className="mySwiper">
        <SwiperSlide><img width="100%" src="/src/assets/slider.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img width="100%" src="/src/assets/slider.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img width="100%" src="/src/assets/slider.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img width="100%" src="/src/assets/slider.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
