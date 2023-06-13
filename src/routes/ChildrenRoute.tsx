import IndexHomeComponent from 'components/homeComponents'
import IndexShopDefault from 'components/shopComponents'
import Page404 from 'pages/404'
import Cart from 'pages/Cart'
import Contact from 'pages/Contact'
import DetailProduct from 'pages/DetailProduct'
import OrderCompleted from 'pages/OrderCompleted'
import SignIn from 'pages/SignIn'
import WishList from 'pages/wishList'
import { TypeViewChildrenRoute } from 'types/Types'

export const ChildrenRouteHome: TypeViewChildrenRoute[] = [
  {
    collapse: false,
    component: <IndexHomeComponent />,
    icon: undefined,
    name: 'home',
    index: true,
    path: '/',
    roles: ['user'],
    views: [
      {
        collapse: false,
        component: <Page404 />,
        icon: undefined,
        name: 'Not Found',
        path: '/not-found',
        roles: ['user'],
      },
      {
        collapse: false,
        component: <IndexShopDefault />,
        icon: undefined,
        name: 'shop-default',
        path: '/product',
        roles: ['user'],
      },
      {
        collapse: false,
        component: <DetailProduct />,
        icon: undefined,
        name: 'Detail Product',
        path: '/product/:slugProduct',
        roles: ['user'],
      },
      {
        collapse: false,
        component: <Cart />,
        icon: undefined,
        name: 'Cart',
        path: '/cart',
        roles: ['user'],
      },
      {
        collapse: false,
        component: <WishList />,
        icon: undefined,
        name: 'wish-list',
        path: '/wish-list',
        roles: ['user'],
      },
      {
        collapse: false,
        component: <OrderCompleted />,
        icon: undefined,
        name: 'Cart',
        path: '/order-completed',
        roles: ['user'],
      },
      {
        collapse: false,
        component: <Contact />,
        icon: undefined,
        name: 'Contact',
        path: '/contact',
        roles: ['user'],
      },
    ],
  },

  // {
  //   collapse: false,
  //   component: <Blog />,
  //   icon: undefined,
  //   name: 'blog',
  //   index: false,
  //   path: '/blog',
  //   roles: ['user'],
  //   views: [
  //     {
  //       collapse: false,
  //       component: <Tech />,
  //       icon: undefined,
  //       name: 'tech',
  //       path: '/tech',
  //       roles: ['user'],
  //     },
  //   ],
  // },
]
