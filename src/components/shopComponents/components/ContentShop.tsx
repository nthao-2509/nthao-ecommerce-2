import CardGrid from 'common/CardGrid'
import Container from 'common/Container'
import { StyleCardGrid } from 'components/style'
import { DataShopDefault } from 'modules/data-fake'
import React from 'react'
import { TypeDataProduct } from 'types/Types'
import Sidebar from './Sidebar'
import CardList from 'common/CardList'
import { StyleCardList } from 'common/style'
import axios from 'axios'
import { Spin } from 'antd'
type Props = {
  view: 'view' | 'list'
}

const ContentShop = ({ view }: Props) => {
  const [dataProduct, setDataProduct] = React.useState<any>()
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  const selectDataProduct = async () => {
    const response = await axios.get('select-product')
    if (response.data.message === 'success') {
      setDataProduct(response.data.data)
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }
  React.useEffect(() => {
    selectDataProduct()
  }, [dataProduct?.length === 0])
  return (
    <Container>
      <Spin spinning={isLoading}>
        <div className='content__shop'>
          <Sidebar />
          {view === 'view' ? (
            <StyleCardGrid column={3}>
              {dataProduct?.map((item: TypeDataProduct) => (
                <CardGrid data={item} key={item.id} />
              ))}
            </StyleCardGrid>
          ) : (
            <StyleCardList>
              {DataShopDefault.map((item: TypeDataProduct) => (
                <CardList key={item.id} data={item} />
              ))}
            </StyleCardList>
          )}
        </div>
      </Spin>
    </Container>
  )
}

export default ContentShop
