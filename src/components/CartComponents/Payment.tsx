import React from 'react'

const Payment = () => {
  return (
    <div className='payment'>
      <div className='payment__total'>
        <h3
          className='main__title'
          style={{
            fontSize: 16,
            textTransform: 'uppercase',
            fontWeight: '600',
            height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Cart Totals
        </h3>
        <div className='payment__total-view'>
          <div className='item'>
            <h4>Subtotals</h4>
            <span>32</span>
          </div>
          <div className='item'>
            <h4>Totals</h4>
            <span>32</span>
          </div>
          <div className='button'>
            <a href='/order-completed' className='button__completed'>
              Proceed To Checkout
            </a>
          </div>
        </div>
      </div>
      <div className='calculate__shopping'></div>
    </div>
  )
}

export default Payment
