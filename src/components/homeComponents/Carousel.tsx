import React from 'react'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { DataCarousel } from 'modules/data-fake'
import { StyleCarousel } from 'components/style'
import Container from 'common/Container'
import { TypeCarousel } from 'types/Types'
import { NavLink } from 'react-router-dom'

const Carousel = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation])
  return (
    <StyleCarousel>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        pagination={{ clickable: true, type: 'bullets' }}
      >
        {DataCarousel.map((item: TypeCarousel, index: number) => (
          <SwiperSlide>
            <Container>
              <div className='carousel'>
                <div className='carousel__left'>
                  {item.text && <div className='carousel__left-text'>{item.text}</div>}
                  <div className='carousel__left-title'>
                    <h1>{item.title}</h1>
                  </div>
                  <div className='carousel__left-description'>
                    <span>{item.description}</span>
                  </div>
                  <div className='carousel__left-button'>
                    <NavLink to={item.href}>
                      <button className='see_more'>Shop Now</button>
                    </NavLink>
                  </div>
                </div>
                <div className='carousel__right'>
                  {item.saleOf && <div className='sale_of'>{item.saleOf}</div>}
                  <div className='shape'></div>
                  <div className='shape2'></div>
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </Container>
            {/* <img src={item.image} alt={`${index}`} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </StyleCarousel>
  )
}

export default Carousel
