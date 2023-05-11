import { StyleButton, StyleFooter } from 'components/style'
import React from 'react'
import Container from './Container'
import { DataFooter } from 'modules/data-fake'
import { TypeFooter, TypeItemsFooter } from 'types/Types'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <div className='footer'>
          <div className='information'>
            <div className='logo'>
              <img src='images/Hekto.png' alt='logo' />
            </div>
            <div className='input__email'>
              <input type='email' placeholder='Enter Email Address' />
              <button>Sign up</button>
            </div>
            <div className='contact__info'>
              <h3 className='title'>Contact Info</h3>
              <span className='description'>17 Princess Road, London, Greater London NW1 8JR, UK</span>
            </div>
          </div>
          <div className='list'>
            {DataFooter.map((item: TypeFooter) => (
              <div className='list__item'>
                <h3>{item.title}</h3>
                <div className='items'>
                  <ul>
                    {item.items.map((children: TypeItemsFooter) => (
                      <li>
                        <NavLink className='nav-link' to={children.href}>
                          {children.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className='bottom'>
        <Container>
          <div className='content'>
            <div className='left'>
              <span>&copy;Webecy - All Rights Reserved</span>
            </div>
            <div className='right'>
              <a href=''>
                <img src='images/facebook.png' alt='' />
              </a>
              <a href=''>
                <img src='images/instagram.png' alt='' />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </StyleFooter>
  )
}

export default Footer
