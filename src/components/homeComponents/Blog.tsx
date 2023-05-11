import React from 'react'
import { StyleBlog } from './style'
import Container from 'common/Container'
import { DataBlog } from 'modules/data-fake'
import { TypeBlog } from 'types/Types'

const Blog = () => {
  return (
    <StyleBlog>
      <Container>
        <h1 className='main__title'>Tin tức</h1>
        <div className='cards'>
          {DataBlog?.map((item: TypeBlog) => (
            <div className='cards__item'>
              <div className='image'>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='cards__item-content'>
                <div className='top'>
                  <div className='name'>
                    <i className='fa-solid fa-pen-nib'></i>
                    <span>{item.name}</span>
                  </div>
                  <div className='date'>
                    <i className='fa-solid fa-calendar-days'></i>
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className='content'>
                  <h3>{item.title}</h3>
                  <span className='description'>{item.description}</span>
                </div>
                <a className='read__more' href={item.href}>
                  Xem thêm
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </StyleBlog>
  )
}

export default Blog
