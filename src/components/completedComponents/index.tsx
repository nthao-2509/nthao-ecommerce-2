import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import Breadcrumb from 'common/Breadcrumb'
import Container from 'common/Container'
import Colors from 'modules/Colors'
import React from 'react'
import { StyledOrderCompleted } from './style'
import { Shape } from 'components/style'
import { StyleButtonCustom } from 'common/style'
const breadcrumb = {
  title: 'Order Completed',
  breadcrumb: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Order Completed',
      href: null,
    },
  ],
}
const IndexCompletedComponent = () => {
  return (
    <>
      <Breadcrumb title={breadcrumb?.title} breadcrumb={breadcrumb?.breadcrumb} />
      <StyledOrderCompleted>
        <img src='/images/clock.png' className='clock' alt='clock' />
        <img src='/images/checklist.png' alt='checklist' className='checklist' />
        <Container>
          <Box textAlign='center' py={10} px={6}>
            <Center>
              <div className='check_completed'>
                <img src='/images/check.png' alt='completed' />
                <Shape />
              </div>
            </Center>
            <Heading className='title' fontWeight={600} as='h2'>
              This is the headline
            </Heading>
            <Center>
              <Text className='description'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua.
              </Text>
            </Center>
            <Center>
              <StyleButtonCustom>
                <a href='/' className='button_style'>
                  Continue Shopping
                </a>
              </StyleButtonCustom>
            </Center>
          </Box>
        </Container>
      </StyledOrderCompleted>
    </>
  )
}

export default IndexCompletedComponent
