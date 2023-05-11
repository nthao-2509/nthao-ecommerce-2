import React from 'react'
import { StyledOffer } from './style'
import Container from 'common/Container'
import { DataOffer } from 'modules/data-fake'
import { TypeOffer } from 'types/Types'

const Offer = () => {
  return (
    <StyledOffer>
      <Container>
        {/* <h1 className='main__title'>What Shopex Offer</h1> */}
        <div className='cards'>
          {DataOffer?.map((item: TypeOffer) => (
            <div className='cards__item'>
              <div className='cards__item-image'>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='cards__item-content'>
                <div className='title'>
                  <h3>{item.title}</h3>
                </div>
                <div className='description'>
                  <span>{item.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </StyledOffer>
  )
}

export default Offer
