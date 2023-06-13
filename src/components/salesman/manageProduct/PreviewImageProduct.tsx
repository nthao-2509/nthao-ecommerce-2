import React, { useState } from 'react'
import { Button, InputNumber, Image } from 'antd'
import Colors from 'modules/Colors'
import { UrlServer } from 'config/UrlServer'

type Props = {
  image: string[]
}

const PreviewImageProduct = ({ image }: Props) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <a
        style={{
          color: Colors.blue,
        }}
        onClick={() => setVisible(true)}
      >
        Hình ảnh
      </a>
      {visible && (
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (value) => {
              setVisible(value)
            },
            style: {
              backgroundColor: '#dddbdb',
            },
          }}
        >
          {image.map((item: string, index: number) => (
            <Image
              width={500}
              style={{
                display: 'none',
              }}
              key={index}
              src={`${UrlServer}/image/${item}`}
            />
          ))}
        </Image.PreviewGroup>
      )}
    </>
  )
}

export default PreviewImageProduct
