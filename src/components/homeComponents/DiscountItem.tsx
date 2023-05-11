import React from 'react'
import { StyleDiscountItem } from './style'
import Container from 'common/Container'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { TypeDiscountItem } from 'types/Types'
import { DataDiscountItem, DataTabDiscountItem } from 'modules/data-fake'
import { Shape } from 'components/style'
const DiscountItem = () => {
  const customPagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="custom_pagination ' + className + '">' + DataTabDiscountItem?.[index] + '</span>'
    },
  }
  return (
    <StyleDiscountItem>
      <Container>
        <h3 className='main__title'>Discount Item</h3>
        <Swiper modules={[Navigation, Pagination, A11y]} spaceBetween={30} slidesPerView={1} pagination={customPagination} className='cards mySwiper'>
          {DataDiscountItem.map((item: TypeDiscountItem) => {
            return (
              <SwiperSlide className='cards__item' key={item.id}>
                <div className='cards__item-left'>
                  <div className='title'>{item.title}</div>
                  <div className='text'>{item.text}</div>
                  <div className='description'>{item.description}</div>
                  <div className='detail'>
                    <ul>
                      {item.detail.map((detail: string, index: number) => (
                        <li key={index}>&#10003; &nbsp;{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='button'>
                    <button>Shop Now</button>
                  </div>
                </div>
                <div className='cards__item-right'>
                  <Shape />
                  <img src={item.image} alt={item.title} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Container>
    </StyleDiscountItem>
  )
}

export default DiscountItem
