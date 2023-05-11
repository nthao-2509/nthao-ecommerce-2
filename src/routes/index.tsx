import Home from 'pages/Home'
import { TypeRoutePublic } from 'types/Types'
import { ChildrenRouteHome } from './ChildrenRoute'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import ForgotPassword from 'pages/ForgotPassword'
import VerifyEmail from 'pages/VerifyEmail'
import ResetPassword from 'pages/ResetPassword'
import Page404 from 'pages/404'
import IndexAdmin from 'pages/admin'
import { ChildrenRouteAdmin } from './ChidrenRouteAdmin'
import IndexSalesman from 'pages/salesman'

export const PublicRoute: TypeRoutePublic[] = [
  {
    collapse: true,
    component: <SignIn />,
    icon: undefined,
    name: 'sign-in',
    path: '/sign-in',
    roles: ['user'],
    views: null,
  },
  {
    collapse: true,
    component: <SignUp />,
    icon: undefined,
    name: 'sign-up',
    path: '/sign-up',
    roles: ['user'],
    views: null,
  },
  {
    collapse: true,
    component: <ForgotPassword />,
    icon: undefined,
    name: 'Forgot Password',
    path: '/forgot-password',
    roles: ['user'],
    views: null,
  },
  {
    collapse: true,
    component: <VerifyEmail />,
    icon: undefined,
    name: 'Verify Email',
    path: '/verify-email',
    roles: ['user'],
    views: null,
  },
  {
    collapse: true,
    component: <ResetPassword />,
    icon: undefined,
    name: 'Reset Password',
    path: '/reset-password',
    roles: ['user'],
    views: null,
  },
  {
    collapse: true,
    component: <Home />,
    icon: undefined,
    name: 'home',
    path: '/',
    roles: ['user'],
    views: [...ChildrenRouteHome],
  },
  {
    collapse: true,
    component: <IndexSalesman />,
    icon: undefined,
    name: 'salesman',
    path: '/salesman',
    roles: ['salesman'],
    views: [...ChildrenRouteAdmin],
  },
  {
    collapse: true,
    component: <IndexAdmin />,
    icon: undefined,
    name: 'admin',
    path: '/admin',
    roles: ['admin'],
    views: [...ChildrenRouteAdmin],
  },
]
