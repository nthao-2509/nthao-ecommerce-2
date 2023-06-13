import React from 'react'
import Lottie from 'lottie-react'
import { Center } from '@chakra-ui/react'
import robotAnimation from './loadingAnimation.json'
const Loading = () => {
  return (
    <Center>
      <Lottie animationData={robotAnimation} />
    </Center>
  )
}

export default Loading
