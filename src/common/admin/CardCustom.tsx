import { Stack } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/system'
import React, { ReactNode } from 'react'

const CardCustom = ({ children }: { children: ReactNode }) => {
  return (
    <Stack borderRadius={10} spacing={20} p={8} w={'full'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} my={10}>
      {children}
    </Stack>
  )
}

export default CardCustom
