import Container from 'common/Container'
import React from 'react'
import { StyleShopDefault } from './style'
import { Select } from '@chakra-ui/react'

type Props = {
  setView: Function
}

const Header = ({ setView }: Props) => {
  return (
    <>
      <Container>
        <div className='shop'>
          <div className='top'>
            <div className='top__left'>
              <h3
                className='main__title'
                style={{
                  fontSize: 22,
                  textAlign: 'start',
                }}
              >
                Ecommerce Acceories & Fashion item
              </h3>
              <span className='description'>About 9.620 results</span>
            </div>
            <div className='top__right'>
              <div className='item'>
                <span className='title'>Sort By: </span>
                <Select placeholder='Best Match' size='md'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </div>
              {/* <div className='item'>
                <span>View: </span>
                <div className='icon'>
                  <i className='fa-solid fa-grip' onClick={() => setView('view')}></i>
                  <i className='fa-solid fa-list' onClick={() => setView('list')}></i>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header
