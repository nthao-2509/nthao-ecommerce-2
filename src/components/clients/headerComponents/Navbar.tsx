import { Drawer, theme } from "antd";
import { dataNavbar } from "modules/data-fake";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import DrawerMobile from "./DrawerMobile";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  let location = useLocation();
  const activeRoute = (routeName: string) => {
    return location.pathname === routeName;
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const handleScroll = (event: any) => {
      onClose();
      // console.log("ssssssss");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onClose]);
  const renderNavbar = (navbar: any) => {
    return navbar?.map((item: any, index: number) => {
      return (
        <li
          key={index}
          className={`nav__item ${item?.subMenu !== null && "menu__line"} ${
            activeRoute(item.path) === true ? "active" : ""
          }`}
        >
          <Link to={item?.path} className='transition'>
            {item.title}
          </Link>
          <div className='sub'>
            <div className='sub__ctt'>
              {item?.subMenu?.map((subMenuParent: any, indexSub: number) => {
                return (
                  <div className='sub__item' key={indexSub}>
                    <ul className='sub__item-list'>
                      <li>
                        <Link to={item?.path + subMenuParent?.path}>
                          {subMenuParent?.title}
                        </Link>
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
    <>
      <div className='navbar'>
        <div className='logo'>
          <h1>BrandName</h1>
        </div>
        <div className='menu'>
          <ul className='nav'>{renderNavbar(dataNavbar)}</ul>
        </div>
        <div className='mobile'>
          <i className='fa-solid fa-magnifying-glass' />
          <i className='fa-regular fa-user' />
          <i className='fa-solid fa-bars-staggered' onClick={showDrawer} />
        </div>
        <div className='user'>
          <div className='user__item sign-in'>
            <i className='fa-regular fa-user'></i>
            <Link to='#'>Login</Link> / <Link to='#'>Register</Link>
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
      <DrawerMobile onClose={onClose} open={open} dataNavbar={dataNavbar} />
    </>
  );
};

export default Navbar;
