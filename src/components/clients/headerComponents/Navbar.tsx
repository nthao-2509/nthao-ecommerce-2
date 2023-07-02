import { dataNavbar } from "modules/data-fake";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const renderNavbar = (navbar: any) => {
    return navbar?.map((item: any, index: number) => {
      return (
        <li
          key={index}
          className={`nav__item ${item?.subMenu !== null && "menu__line"}`}
        >
          <a href={item?.path} className='transition'>
            {item.title}
          </a>
          <div className='sub'>
            <div className='sub__ctt'>
              {item?.subMenu?.map((subMenuParent: any, indexSub: number) => {
                return (
                  <div className='sub__item' key={indexSub}>
                    <ul className='sub__item-list'>
                      <li>
                        <a href={item?.path + subMenuParent?.path}>
                          {subMenuParent?.title}
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </li>
      );
    });
  };
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>BrandName</h1>
      </div>
      <div className='menu'>
        <ul className='nav'>{renderNavbar(dataNavbar)}</ul>
      </div>
      <div className='user'>
        <div className='user__item sign-in'>
          <i className='fa-regular fa-user'></i>
          <a href='#'>Login</a> / <a href='#'>Register</a>
        </div>
        <div className='user__item search'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <div className='user__item cart'>
          <NavLink to='#'>
            <i className='fa-solid fa-cart-shopping'></i>
          </NavLink>
          <div className='badge'>1</div>
        </div>
        <div className='user__item wishlist'>
          <NavLink to='#'>
            <i className='fa-regular fa-heart'></i>
          </NavLink>
          <div className='badge'>1</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
