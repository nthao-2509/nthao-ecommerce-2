import { Checkbox } from '@chakra-ui/react'
import React from 'react'
import { TypeListItemSidebar } from 'types/Types'

type Props = {
  items: TypeListItemSidebar[] | null
}

const ListCheckbox = ({ items }: Props) => {
  return (
    <>
      {items?.map((item: TypeListItemSidebar, index: number) => (
        <Checkbox
          style={{
            width: '100%',
          }}
          value={item.tags}
          key={index}
        >
          {item.item}
        </Checkbox>
      ))}
    </>
  )
}

export default ListCheckbox
