import { UrlServer } from 'config/UrlServer'
import { formatter } from 'config/numberFormat'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { TypeDataProduct } from 'types/Types'

type Props = {
  data: any
  key: number | string
}

const CardGrid = ({ data, key }: Props) => {
  return (
    <div className='cards__item' key={key}>
      <div className='icon'>
        <i className='fa-solid fa-cart-shopping'></i>
        <i className='fa-regular fa-heart'></i>
      </div>
      <div className='cards__item-image'>
        <img
          src={`${UrlServer}/image/${data.images?.[0]}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          alt={data.nameProduct}
        />
      </div>
      <NavLink to={data.slug}>
        <div className='cards__item-button-view'>View Details</div>
      </NavLink>
      <div
        className='cards__item-content'
        style={{
          padding: '10px 15px',
        }}
      >
        <div className='title'>
          <h3>{data.nameProduct}</h3>
        </div>
        {/* <div className='colors'>
          {data?.colors?.map((color: string, indexColors: number) => (
            <div
              className='color'
              key={indexColors}
              style={{
                backgroundColor: color,
              }}
            ></div>
          ))}
        </div> */}
        {/* <div className='code'>
          <span>Code - {data.code}</span>
        </div> */}
        <div className='price'>
          <span>{formatter.format(data.priceProduct)}</span>
          {/* <del>{data.old_price}</del> */}
        </div>
      </div>
    </div>
  )
}

export default CardGrid
