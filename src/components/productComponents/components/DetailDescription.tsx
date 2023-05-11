import React from 'react'
import parse from 'html-react-parser'
import Container from 'common/Container'
import { Typography } from 'antd'

const { Title } = Typography
const DetailDescription = ({ content }: { content: string }) => {
  return (
    <div
      style={{
        backgroundColor: '#F9F8FE',
        padding: '50px 0',
      }}
    >
      <Container>
        <Title level={3}>Mô tả sản phẩm</Title>

        {content && parse(content)}
      </Container>
    </div>
  )
}

export default DetailDescription
