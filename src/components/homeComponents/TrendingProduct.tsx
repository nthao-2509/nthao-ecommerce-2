import React from 'react'
import { StyleTrendingProduct } from './style'
import Container from 'common/Container'
import { DataTrending } from 'modules/data-fake'
import { TypeTrending } from 'types/Types'

const TrendingProduct = () => {
  return (
    <StyleTrendingProduct>
      <Container>
        <h1 className='main__title'>Trending Products</h1>
        <div className='cards'>
          {DataTrending.map((item: TypeTrending) => (
            <div className='cards__item'>
              <div className='cards__item-image'>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='cards__item-content'>
                <div className='title'>
                  <h3>{item.title}</h3>
                </div>
                <div className='price'>
                  <span>${item.price}</span>
                  <del>${item.old_price}</del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </StyleTrendingProduct>
  )
}

export default TrendingProduct
