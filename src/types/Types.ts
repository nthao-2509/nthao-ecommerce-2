import { IconType } from 'react-icons'

export type TypeRole = 'user' | 'admin' | 'salesman'
export type TypeRouteChildrenLv3 = {
  collapse: boolean
  component: React.ReactNode | undefined
  icon: IconType | null | undefined
  name: string
  path: string
  roles: TypeRole[]
}
export type TypeViewChildrenRoute = {
  collapse: boolean
  component: React.ReactNode
  icon: IconType | null | undefined
  index: boolean
  name: string
  path: string
  roles: TypeRole[]
  views: TypeRouteChildrenLv3[] | [] | null | undefined
}
export type TypeViewChildrenRouteAdmin = {
  collapse: boolean
  component: React.ReactNode
  icon: IconType
  index: boolean
  name: string
  path: string
  roles: TypeRole[]
  views: TypeRouteChildrenLv3[] | [] | null | undefined
}
export type TypeRoutePublic = {
  collapse: boolean
  component: React.ReactNode
  icon: React.ReactNode | string | undefined | null
  name: string
  path: string
  roles: TypeRole[]
  views: TypeViewChildrenRoute[] | [] | null | undefined
}
// Navbar
export type TypeSubmenu = {
  title: string
  path: string
  id: number
  subMenu: any
}
export type TypeNavbar = {
  title: string
  path: string
  id: number
  subMenu: TypeSubmenu[] | null
}
export type TypeCarousel = {
  text: string | null
  title: string
  description: string
  saleOf: string | null
  image: string
  href: string
}
export type TypeFeaturedProducts = {
  id: number | string
  title: string
  colors: string[]
  code: string
  price: number
  old_price: number | null
  image: string
  href: string
}
export type TypeDataProduct = {
  id: number | string
  title: string
  colors: string[]
  code: string
  price: number
  old_price: number | null
  image: string
  href: string
  description?: string
  slug: string
}
export type TypeTabsLeatest = {
  title: string
  id: number
  key: string
}
export type TypeLeatestProduct = {
  title: string
  price: number
  old_price: number | null
  sale: boolean
  id: number
  image: string
}
export type TypeOffer = {
  title: string
  image: string
  description: string
}
export type TypeTrending = {
  id: number
  title: string
  price: number
  old_price: number
  image: string
}

export type TypeDiscountItem = {
  id: number
  image: string
  title: string
  text: string
  description: string
  detail: string[]
}
export type TypeTopCategories = {
  id: number
  title: string
  price: number
  old_price: number | null
  image: string
}
export type TypeBlog = {
  id: number | string
  date: string
  name: string
  title: string
  description: string
  href: string
  image: string
}
export type TypeItemsFooter = {
  title: string
  href: string
}
export type TypeFooter = {
  title: string
  items: TypeItemsFooter[]
}
export type TypeListItemSidebar = {
  item: number | string
  numberProduct?: number | string | null
  tags?: number | string
}
export type TypeSidebarProduct = {
  title: string
  type: string
  listItem: TypeListItemSidebar[] | null
}
export type TypeDetailProduct = {
  title: string
  rating: number
  price: number
  old_price: number | null
  colors: string[]
  description: string | null
  categories: string | null
  tags: string[] | null
  images: string[] | null
}
export type TypeCart = {
  id: number | string
  image: string
  name: string
  slug: string
  color: string
  price: number
  quantity: number
  time: string
}
