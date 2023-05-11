import React from 'react'
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
  Text,
  useColorModeValue,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { SiLinkedin, SiMessenger } from 'react-icons/si'
import { StyleDivider } from 'common/style'
import Container from 'common/Container'
import Colors from 'modules/Colors'
const VerifyEmail = () => {
  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'sm'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={6} my={10}>
            <Center>
              <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                Verify your Email
              </Heading>
            </Center>
            <Center fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
              We have sent code to your email
            </Center>
            <Center fontSize={{ base: 'sm', sm: 'md' }} fontWeight='bold' color={useColorModeValue('gray.800', 'gray.400')}>
              username@mail.com
            </Center>
            <FormControl>
              <Center>
                <HStack>
                  <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </Center>
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
                Verify
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

export default VerifyEmail
