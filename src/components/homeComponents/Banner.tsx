import React from 'react'
import { StyleBanner } from './style'
import Container from 'common/Container'
import { Shape } from 'components/style'
import { DataBanner } from 'modules/data-fake'

const Banner = () => {
  return (
    <StyleBanner>
      <Container>
        <div className='banner'>
          <div className='banner__left'>
            <div className='banner__left-image'>
              <img src={DataBanner?.[0].image} alt={DataBanner?.[0].title} />
              <Shape></Shape>
            </div>
          </div>
          <div className='banner__right'>
            <div className='banner__right-title'>
              <h3>{DataBanner?.[0].title}</h3>
            </div>
            <div className='banner__right-description'>
              <ul>
                {DataBanner?.[0].description?.map((item: { content: string; color: string }, index: number) => (
                  <li key={index}>
                    <div style={{ backgroundColor: item.color }} className='dots'></div>
                    <span>{item.content}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='banner__right-button'>
              <button>Add To Cart</button>
              <div>
                <div className='name'>{DataBanner?.[0].name}</div>
                <div className='price'>${DataBanner?.[0].price}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </StyleBanner>
  )
}

export default Banner
