import React from 'react'
import { StyleNavbar } from './style'
import { NavLink } from 'react-router-dom'
import { dataNavbar } from 'modules/data-fake'
import { TypeNavbar } from 'types/Types'
import Container from 'common/Container'
const Navbar = () => {
  const renderNavbar = (dataNavbar: any) => {
    return dataNavbar?.map((item: any, index: number) => {
      return (
        <li key={index} className={`nav__item ${item?.subMenu !== null && 'menu__line'}`}>
          <NavLink to={item?.path} className='transition'>
            {item.title}
          </NavLink>
          <div className='sub'>
            <div className='sub__ctt'>
              {item?.subMenu?.map((subMenuParent: any, indexSub: number) => {
                return (
                  <div className='sub__item' key={indexSub}>
                    <ul className='sub__item-list'>
                      <li>
                        <NavLink to={item?.path + subMenuParent?.path}>{subMenuParent?.title}</NavLink>
                      </li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </li>
      )
    })
  }
  return (
    <StyleNavbar>
      <Container>
        <div className='navbar'>
          <div className='navbar__image'>
            <img src='images/Hekto.png' alt='' />
          </div>
          <div className='navbar__menu'>
            <ul className='nav'>{renderNavbar(dataNavbar)}</ul>
          </div>
          <div className='navbar__search'>
            <input type='text' />
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
      </Container>
    </StyleNavbar>
  )
}

export default Navbar
