import { StyleContainer } from 'components/style'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <StyleContainer>{children}</StyleContainer>
}

export default Container
