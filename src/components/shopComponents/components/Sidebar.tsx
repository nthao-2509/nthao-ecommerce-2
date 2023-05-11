import React from 'react'
import { StyleSideBar } from './style'
import { DataSidebar } from 'modules/data-fake'
import { TypeSidebarProduct } from 'types/Types'
import ListCheckbox from './sidebar/ListCheckbox'
import Rating from './sidebar/Rating'
import IndexRangeSlider from './sidebar/RangeSlider'

const Sidebar = () => {
  return (
    <StyleSideBar>
      <div className='sidebar'>
        {DataSidebar?.map((item: TypeSidebarProduct) => {
          return (
            <>
              <div className='sidebar__title'>
                <h3>{item.title}</h3>
              </div>
              <div className='sidebar__content'>
                {item?.type?.toUpperCase() === 'CHECKBOX' && <ListCheckbox items={item.listItem} />}
                {item?.type?.toUpperCase() === 'RATING' && <Rating items={item.listItem} />}
                {item?.type?.toUpperCase() === 'PRICE' && <IndexRangeSlider />}
              </div>
            </>
          )
        })}
      </div>
    </StyleSideBar>
  )
}

export default Sidebar
