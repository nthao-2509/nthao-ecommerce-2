import React from 'react'
import { StyledRelatedProduct } from '../style'
import { StyleCardGrid } from 'components/style'
import Container from 'common/Container'
import { DataRelatedProduct } from 'modules/data-fake'
import CardGrid from 'common/CardGrid'
import { TypeDataProduct } from 'types/Types'
import axios from 'axios'

const RelatedProduct = () => {
  const [dataProduct, setDataProduct] = React.useState<any>()

  const selectDataProduct = async () => {
    const response = await axios.get('select-product')
    setDataProduct(response.data.data)
  }
  React.useEffect(() => {
    selectDataProduct()
  }, [dataProduct?.length === 0])
  return (
    <StyledRelatedProduct>
      <h1
        style={{
          textAlign: 'start',
        }}
        className='main__title'
      >
        Related Product
      </h1>

      <Container>
        <StyleCardGrid column={4}>
          {DataRelatedProduct.map((item: TypeDataProduct) => (
            <CardGrid data={item} key={item.id} />
          ))}
        </StyleCardGrid>
      </Container>
    </StyledRelatedProduct>
  )
}

export default RelatedProduct
