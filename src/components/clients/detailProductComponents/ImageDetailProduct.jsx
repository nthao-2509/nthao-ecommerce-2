import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// import required modules
const ImageDetailProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className='carousel'>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper2'
        >
          {Array.from({ length: 2 }).map((item, key) => (
            <SwiperSlide>
              <img src={`/images/detail-${key + 1}.jpg`} alt={`${key}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='image__list'>
        <Swiper
          onSwiper={(value) => {
            if (value) setThumbsSwiper(value);
          }}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='mySwiper'
        >
          {Array.from({ length: 2 }).map((item, key) => (
            <SwiperSlide>
              <img src={`/images/detail-${key + 1}.jpg`} alt={`${key}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageDetailProduct;
