import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Slider() {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide><img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/78699c79b5923e26.png?q=20' alt='image1'/></SwiperSlide>
    <SwiperSlide><img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b3c79b4635dc3dea.jpg?q=20' alt='image2'/></SwiperSlide>
    <SwiperSlide><img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ceb25a1e133b7c45.jpg?q=20' alt='image3'/></SwiperSlide>
    <SwiperSlide><img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a6311495f641d028.jpg?q=20' alt='image4'/></SwiperSlide>
    <SwiperSlide><img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ceb25a1e133b7c45.jpg?q=20' alt='image5'/></SwiperSlide>
  </Swiper>

  )
}
