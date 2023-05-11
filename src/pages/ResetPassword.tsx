import React from 'react'
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Stack,
  Image,
  Center,
  useColorModeValue,
  HStack,
  PinInput,
  PinInputField,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import Colors from 'modules/Colors'
const ResetPassword = () => {
  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
              Enter new password
            </Heading>
            <FormControl id='email' isRequired>
              <FormLabel>Email address</FormLabel>
              <Input placeholder='your-email@example.com' _placeholder={{ color: 'gray.500' }} type='email' />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <FormControl id='confirm_password' isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <Stack spacing={6}>
              <Button
                size='lg'
                bg={Colors.pink}
                color={'white'}
                _hover={{
                  bg: Colors.white,
                  color: Colors.pink,
                  border: `1px solid ${Colors.pink}`,
                }}
              >
                Reset Password
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    </>
  )
}

export default ResetPassword
