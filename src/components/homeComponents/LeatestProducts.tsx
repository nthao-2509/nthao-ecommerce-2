import React from 'react'
import { StyledLeatestProducts } from './style'
import Container from 'common/Container'
import { DataLeatestProducts, DataTabsLeatestProduct } from 'modules/data-fake'
import { TypeLeatestProduct, TypeTabsLeatest } from 'types/Types'
import axios from 'axios'
import _ from 'lodash'
import { UrlServer } from 'config/UrlServer'
import { formatter } from 'config/numberFormat'
import { Link } from 'react-router-dom'

const LeatestProducts = () => {
  const [tabActiveNumber, setTabActiveNumber] = React.useState<number>(1)
  const [dataProduct, setDataProduct] = React.useState<any>()
  const [dataFilterProduct, setDataFilterProduct] = React.useState<any>()

  const selectDataProduct = async () => {
    const response = await axios.get('select-product')
    setDataFilterProduct(response?.data?.data?.filter((e: any) => e.thongSoKyThuat.dongSanPham === 'XE-CO'))
    setDataProduct(response.data.data)
  }
  React.useEffect(() => {
    selectDataProduct()
  }, [dataProduct?.length === 0])
  const onTab = (item: any) => {
    setTabActiveNumber(item.id)
    setDataFilterProduct(dataProduct.filter((e: any) => e.thongSoKyThuat.dongSanPham === item.key))
  }
  return (
    <StyledLeatestProducts>
      <Container>
        <h1 className='main__title'>DANH MỤC SẢN PHẨM</h1>
        <div className='tabs'>
          <ul>
            {DataTabsLeatestProduct?.map((item: TypeTabsLeatest) => (
              <li className={tabActiveNumber === item.id ? 'active' : ''} onClick={() => onTab(item)}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className='cards'>
          {dataFilterProduct?.map((item: any) => (
            <Link
              to={`product/${item.slug}`}
              style={{
                zIndex: 1,
              }}
            >
              <div className='cards__item' key={item.id}>
                {item.sale && (
                  <div className='cards__item-sale'>
                    <img src='images/sale.png' alt='sale' />
                  </div>
                )}
                <div className='cards__item-icon'>
                  <i className='fa-solid fa-cart-shopping'></i>
                  <i className='fa-regular fa-heart'></i>
                </div>
                <div className='cards__item-image'>
                  <img src={`${UrlServer}/image/${item.images?.[0]}`} alt={item.nameProduct} />
                </div>
                <div className='cards__item-content'>
                  <div className='title'>
                    <span>{item.nameProduct}</span>
                  </div>
                  <div
                    className='price'
                    style={{
                      width: '30%',
                    }}
                  >
                    <span>${formatter.format(item.priceProduct)}</span>
                    {/* <del>${item.old_price}</del> */}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </StyledLeatestProducts>
  )
}

export default LeatestProducts
