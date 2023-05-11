import { StyleBreadcrumb } from 'components/style'
import React from 'react'
import Container from './Container'
import { NavLink } from 'react-router-dom'

type TypeBreadcrumb = {
  title: string
  href: string | null
}

type Props = {
  title: string
  breadcrumb: TypeBreadcrumb[]
}

const Breadcrumb = ({ breadcrumb, title }: Props) => {
  return (
    <StyleBreadcrumb>
      <Container>
        <h1
          className='main__title'
          style={{
            textAlign: 'start',
            fontSize: 36,
          }}
        >
          {title}
        </h1>
        <div className='breadcrumb'>
          <ul>
            {breadcrumb?.map((item: TypeBreadcrumb, index: number) => (
              <li key={index} className={`${item.href ? 'navlink' : 'active'}`}>
                <NavLink to={`${item?.href}`}>{item?.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </StyleBreadcrumb>
  )
}

export default Breadcrumb
