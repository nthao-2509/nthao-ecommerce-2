import { Checkbox } from '@chakra-ui/react'
import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Rating = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Checkbox>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ReactStars edit={false} value={item.item} size={24} activeColor='#ffd700' />
            {item.numberProduct && <span>({item.numberProduct})</span>}
          </div>
        </Checkbox>
      ))}
    </>
  )
}

export default Rating
