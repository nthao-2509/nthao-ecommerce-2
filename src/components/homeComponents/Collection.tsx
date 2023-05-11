import React from 'react'
import { StyleCollection } from './style'
import Container from 'common/Container'

const Collection = () => {
  return (
    <StyleCollection>
      <Container>
        <div className='cards'>
          <div className='cards__item'>
            <div>
              <div className='title'>
                <h3>23% off in all products</h3>
              </div>
              <div className='link'>
                <a href=''>Shop now</a>
              </div>
            </div>
            <div className='image'>
              <img src='' alt='' />
            </div>
          </div>
        </div>
      </Container>
    </StyleCollection>
  )
}

export default Collection
