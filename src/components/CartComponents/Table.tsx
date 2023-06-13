import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useNumberInput } from '@chakra-ui/react'
import { DataCart } from 'modules/data-fake'
import React from 'react'
import { TypeCart } from 'types/Types'
import QuantityComponent from './Quantity'
import { useDispatch, useSelector } from 'react-redux'
import { formatter } from 'config/numberFormat'
import { UrlServer } from 'config/UrlServer'
import { AppDispatch } from 'store'
import { removeCartItem } from 'features/cart/cartSlice'

const TableShoppingCurt = () => {
  const { cartItems } = useSelector((state: any) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  const handleRemoveCartItem = (product: any) => {
    dispatch(removeCartItem(product))
  }
  return (
    <div className='table'>
      <TableContainer>
        <Table variant='simple'>
          <Thead marginBottom={50}>
            <Tr>
              <Th>Sản phẩm</Th>
              <Th>Giá</Th>
              <Th>Số lượng</Th>
              <Th>Tổng giá</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems?.map((item: any) => (
              <Tr>
                <Td className='information__product'>
                  <div className='image'>
                    <img src={`${UrlServer}/image/${item.images?.[0]}`} alt={item.nameProduct} />
                  </div>
                  <div className='information'>
                    <div className='name'>
                      <h4>{item.nameProduct}</h4>
                    </div>
                    {/* <div className='color'>
                      <h4>Color: </h4>
                      <div
                        style={{
                          backgroundColor: item.color,
                        }}
                      />
                    </div> */}
                  </div>
                </Td>
                <Td>{formatter.format(item.priceProduct)}</Td>
                <Td width={'136px'}>
                  <QuantityComponent quantity={item.cartQuantity} itemProduct={item} />
                </Td>
                <Td>{formatter.format(item.cartQuantity * Number(item.priceProduct))}</Td>
                <Td>
                  <div className='table__bottom'>
                    <div
                      className='button'
                      style={{
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      <button
                        style={{
                          padding: '2px 4px',
                          borderRadius: 2,
                        }}
                        onClick={() => handleRemoveCartItem(item)}
                      >
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div className='table__bottom'>
        <div className='button'>
          <button
            style={{
              padding: '11px 20px',
            }}
          >
            Tiếp tục mua hàng
          </button>
        </div>
      </div>
    </div>
  )
}

export default TableShoppingCurt
