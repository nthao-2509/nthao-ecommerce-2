import React from 'react'
import Carousel from './Carousel'
import FeaturedProducts from './FeaturedProducts'
import LeatestProducts from './LeatestProducts'
import Offer from './Offer'
import Banner from './Banner'
import TrendingProduct from './TrendingProduct'
import DiscountItem from './DiscountItem'
import Categories from './Categories'
import Advertisement from './Advertisement'
import Blog from './Blog'

const IndexHomeComponent = () => {
  return (
    <>
      <Carousel />
      <FeaturedProducts />
      <LeatestProducts />
      <Offer />
      {/* <Banner /> */}
      {/* <TrendingProduct /> */}
      {/* <DiscountItem /> */}
      {/* <Categories /> */}
      {/* <Advertisement /> */}
      <Blog />
    </>
  )
}

export default IndexHomeComponent
