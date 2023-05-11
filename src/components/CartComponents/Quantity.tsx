import React from 'react'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
type Props = {
  quantity: number
}
const QuantityComponent = ({ quantity }: Props) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    min: 1,
    defaultValue: quantity,
    max: 999,
  })
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  return (
    <HStack>
      <Button {...dec}>-</Button>
      <Input
        style={{
          textAlign: 'center',
        }}
        maxW={16}
        {...input}
      />
      <Button {...inc}>+</Button>
    </HStack>
  )
}

export default QuantityComponent
