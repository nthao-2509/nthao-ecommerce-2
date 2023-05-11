import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useNumberInput } from '@chakra-ui/react'
import { DataCart } from 'modules/data-fake'
import React from 'react'
import { TypeCart } from 'types/Types'
import QuantityComponent from './Quantity'

const TableShoppingCurt = () => {
  return (
    <div className='table'>
      <TableContainer>
        <Table variant='simple'>
          <Thead marginBottom={50}>
            <Tr>
              <Th>Product</Th>
              <Th isNumeric>Price</Th>
              <Th>Quantity</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {DataCart?.map((item: TypeCart) => (
              <Tr>
                <Td className='information__product'>
                  <div className='image'>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='information'>
                    <div className='name'>
                      <h4>{item.name}</h4>
                    </div>
                    <div className='color'>
                      <h4>Color: </h4>
                      <div
                        style={{
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                </Td>
                <Td isNumeric>25.4</Td>
                <Td>
                  <QuantityComponent quantity={item.quantity} />
                </Td>
                <Td isNumeric>25.4</Td>
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
            Update Curt
          </button>
        </div>
        <div className='button'>
          <button
            style={{
              padding: '11px 20px',
            }}
          >
            Clear Curt
          </button>
        </div>
      </div>
    </div>
  )
}

export default TableShoppingCurt
