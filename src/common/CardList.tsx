import React from 'react'
import { StyleCardList } from './style'
import { TypeDataProduct } from 'types/Types'

type Props = {
  data: TypeDataProduct
  key: number | string
}
const CardList = ({ data, key }: Props) => {
  return (
    <a href={`product/${data.slug}`} key={key}>
      <div className='cards__item' key={key}>
        <div className='cards__item-image'>
          <img src={data.image} alt={data.title} />
        </div>
        <div className='cards__item-content'>
          <div className='title'>
            <h3>{data.title}</h3>
            <div className='colors'>
              {data.colors.map((item: string, index: number) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: item,
                  }}
                  className='color'
                />
              ))}
            </div>
          </div>
          <div className='price'>
            <span>{data.price}</span>
            <del>{data.old_price}</del>
          </div>
          <div className='description'>
            <span>{data.description}</span>
          </div>
          <div className='icon'>
            <i className='fa-solid fa-cart-shopping'></i>
            <i className='fa-regular fa-heart'></i>
          </div>
        </div>
      </div>
    </a>
  )
}

export default CardList
