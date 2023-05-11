import React from 'react'
import { StyledDetailProduct } from './style'
import Container from 'common/Container'
import Breadcrumb from 'common/Breadcrumb'
import ShowDetailsProduct from './components/ShowDetailsProduct'
import { DataDetailProduct } from 'modules/data-fake'
import RelatedProduct from './components/RelatedProduct'
import axios from 'axios'
import DetailDescription from './components/DetailDescription'
import { Spin } from 'antd'

const breadcrumb = {
  title: 'Product Details',
  breadcrumb: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Product',
      href: '/product',
    },
    {
      title: 'Name Product',
      href: null,
    },
  ],
}
const DetailProductComponent = () => {
  const [dataDetailProduct, setDataDetailProduct] = React.useState<any>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  const selectDetailProduct = async () => {
    const response = await axios.post('/detail-product', {
      slug: window.location.pathname.split('/')[2],
    })
    if (response.data.message === 'success') {
      setDataDetailProduct(response.data.data)
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }
  React.useEffect(() => {
    selectDetailProduct()
  }, [])
  return (
    <StyledDetailProduct>
      <Spin spinning={isLoading}>
        <Breadcrumb title={breadcrumb?.title} breadcrumb={breadcrumb?.breadcrumb} />
        <Container>
          <ShowDetailsProduct data={dataDetailProduct} />
        </Container>

        <DetailDescription content={dataDetailProduct?.detailProduct} />
        {/* <Container>
          <RelatedProduct data={dataDetailProduct} />
        </Container> */}
      </Spin>
    </StyledDetailProduct>
  )
}

export default DetailProductComponent
