import React from 'react'
import { StyleCategories } from './style'
import Container from 'common/Container'
import { DataTopCategories } from 'modules/data-fake'
import { TypeTopCategories } from 'types/Types'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Categories = () => {
  const customPagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="custom_pagination ' + className + '">' + '</span>'
    },
  }
  return (
    <StyleCategories>
      <Container>
        <h1 className='main__title'>Top Categories</h1>
        <Swiper modules={[Navigation, Pagination, A11y]} spaceBetween={30} slidesPerView={4} pagination={customPagination} className='cards mySwiper'>
          {DataTopCategories.map((item: TypeTopCategories) => (
            <SwiperSlide className='cards'>
              <div className='cards__item' key={item.id}>
                <div className='shape' />
                <div className='image'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='content'>
                  <h3 className='content__title'>{item.title}</h3>
                  <div className='content__price'>
                    <span>${item.price}</span>
                    <del>{item.old_price && `$${item.old_price}`}</del>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </StyleCategories>
  )
}

export default Categories
