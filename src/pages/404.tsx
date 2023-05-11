import { Button, Center, Stack } from '@chakra-ui/react'
import Breadcrumb from 'common/Breadcrumb'
import Container from 'common/Container'
import { StyleButtonCustom } from 'common/style'
import React from 'react'

const breadcrumb = {
  title: '404           Not Found',
  breadcrumb: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: '404 Not Found',
      href: null,
    },
  ],
}

const Page404 = () => {
  return (
    <>
      <Breadcrumb title={breadcrumb?.title} breadcrumb={breadcrumb?.breadcrumb} />
      <Container>
        <Center>
          <img
            style={{
              width: 913,
              height: 644,
              objectFit: 'contain',
            }}
            src='/images/404.png'
            alt='404'
          />
        </Center>
        <Center
          style={{
            margin: '0 0 100',
          }}
        >
          <StyleButtonCustom>
            <a href='/' className='button_style'>
              Back To Home
            </a>
          </StyleButtonCustom>
        </Center>
      </Container>
    </>
  )
}

export default Page404
