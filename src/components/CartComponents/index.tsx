import Breadcrumb from 'common/Breadcrumb'
import Container from 'common/Container'
import React from 'react'
import TableShoppingCurt from './Table'
import { StyledCart } from './style'
import Payment from './Payment'
const breadcrumb = {
  title: 'Shopping Curt',
  breadcrumb: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Shopping curt ',
      href: null,
    },
  ],
}
const CartComponent = () => {
  return (
    <StyledCart>
      <Breadcrumb title={breadcrumb?.title} breadcrumb={breadcrumb?.breadcrumb} />
      <Container>
        <div className='shopping__curt'>
          <TableShoppingCurt />
          <Payment />
        </div>
      </Container>
    </StyledCart>
  )
}

export default CartComponent
