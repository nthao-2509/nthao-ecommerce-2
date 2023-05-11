import { StyleHeader } from 'components/style'
import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <StyleHeader>
      <Container>
        <div className='header'>
          <div className='header__right'>
            <div className='header__right-email'>
              <span>
                <i className='fa-regular fa-envelope'></i>
                nvtai.20it4@vku.udn.vn
              </span>
            </div>
            <div className='header__right-phone'>
              <span>
                <i className='fa-solid fa-phone'></i>
                0123456789
              </span>
            </div>
          </div>
          <div className='header__left'>
            <div className='header__left-login'>
              <a href='/sign-in'>
                <span>
                  Đăng nhập
                  <i className='fa-regular fa-user'></i>
                </span>
              </a>
            </div>
            <div className='header__left-wishlist'>
              <span>
                Yêu thích
                <i className='fa-regular fa-heart'></i>
              </span>
            </div>
            <div className='header__left-cart'>
              <a href='/cart'>
                <i className='fa-solid fa-cart-shopping'></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </StyleHeader>
  )
}

export default Header
