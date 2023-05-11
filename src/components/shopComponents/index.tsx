import Breadcrumb from 'common/Breadcrumb'
import React from 'react'
import Header from './components/Header'
import ContentShop from './components/ContentShop'
import { StyleShopDefault } from './components/style'

const breadcrumb = {
  title: 'Shop Grid Default',
  breadcrumb: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Pages',
      href: '/pages',
    },
    {
      title: 'Shop Grid Default',
      href: null,
    },
  ],
}

const IndexShopDefault = () => {
  const [view, setView] = React.useState<'view' | 'list'>('view')

  return (
    <StyleShopDefault>
      <Breadcrumb title={breadcrumb?.title} breadcrumb={breadcrumb?.breadcrumb} />
      <Header setView={setView} />
      <ContentShop view={view} />
    </StyleShopDefault>
  )
}

export default IndexShopDefault
