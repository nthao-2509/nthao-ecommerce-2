import IndexDashboard from 'components/admin/dashboard'
import IndexManageUser from 'components/admin/mangeUser'
import IndexHomeComponent from 'components/homeComponents'
import IndexShopDefault from 'components/shopComponents'
import Page404 from 'pages/404'
import Cart from 'pages/Cart'
import Contact from 'pages/Contact'
import DetailProduct from 'pages/DetailProduct'
import OrderCompleted from 'pages/OrderCompleted'
import SignIn from 'pages/SignIn'
import IndexAdmin from 'pages/admin'
import { TypeViewChildrenRoute } from 'types/Types'
import { FiHome, FiUser } from 'react-icons/fi'
import ManageProduct from 'components/salesman/ManageProduct'
export const ChildrenRouteAdmin: TypeViewChildrenRoute[] = [
  {
    collapse: false,
    component: <IndexDashboard />,
    icon: FiHome,
    name: 'dashboard',
    index: false,
    path: '',
    roles: ['admin', 'salesman'],
    views: null,
  },
  {
    collapse: false,
    component: <IndexManageUser />,
    icon: FiUser,
    name: 'User Manage',
    index: false,
    path: '/quan-ly-nguoi-dung',
    roles: ['admin'],
    views: null,
  },
  {
    collapse: false,
    component: <ManageProduct />,
    icon: FiUser,
    name: 'Quản lý sản phẩm',
    index: false,
    path: '/quan-ly-san-pham',
    roles: ['salesman'],
    views: null,
  },
]
