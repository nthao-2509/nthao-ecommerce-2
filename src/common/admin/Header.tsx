import { Flex, Heading, Stack } from '@chakra-ui/react'
import Container from 'common/Container'
import React, { ReactNode } from 'react'

interface Props {
  title: string
  children?: ReactNode
}

const Header = ({ title, children }: Props) => {
  return (
    <>
      <Flex flex={1} margin={'20px 0 50px'} align={'center'} justifyContent={'space-between'}>
        <Heading as='h3' size='lg' m={0} p={0}>
          {title}
        </Heading>
        <div>{children}</div>
      </Flex>
    </>
  )
}

export default Header
