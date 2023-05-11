import React from 'react'
import { StyledAdvertisement } from './style'
import { DataAdvertisement } from 'modules/data-fake'
import { StyleButton } from 'components/style'

const Advertisement = () => {
  return (
    <StyledAdvertisement backgroundImage={DataAdvertisement?.[0]?.backgroundImage}>
      <div className='content'>
        <h1 className='main__title'>{DataAdvertisement?.[0]?.title}</h1>
        <a href={DataAdvertisement?.[0]?.href}>
          <StyleButton>Shop Now</StyleButton>
        </a>
      </div>
    </StyledAdvertisement>
  )
}

export default Advertisement
