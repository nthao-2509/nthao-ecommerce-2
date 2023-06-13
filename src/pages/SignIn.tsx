import { Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Link, Stack, Image, Center, Text, useToast } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { SiLinkedin, SiMessenger } from 'react-icons/si'
import { StyleDivider } from 'common/style'
import Container from 'common/Container'
import Colors from 'modules/Colors'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'store'
import { message } from 'antd'
import Loading from 'common/Loading'
import { login, reset } from 'features/auth/authSlice'
interface Values {
  email: string
  password: string
}
const SignIn = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [isSubmitted, setSubmitted] = React.useState<boolean>(false)
  const [isLoadingPages, setIsLoadingPages] = React.useState<boolean>(false)

  const { user, isLoading, isError, isSuccess, message: messageAuth } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const [messageApi, contextHolder] = message.useMessage()

  React.useEffect(() => {
    if (isError) {
      messageApi.open({
        type: 'error',
        content: messageAuth,
      })
    }
    if (isSuccess || user) {
      setIsLoadingPages(true)
      setTimeout(() => {
        setIsLoadingPages(false)
        navigate(`/${user.role === 'buyer' ? '' : user.role}`)
      }, 3000)
    }
    dispatch(reset())
  }, [user, isLoading, isError, isSuccess, messageAuth, navigate, dispatch])

  const onSubmitSignIn = async (values: Values) => {
    setIsLoadingPages(true)
    const parameters = {
      email: values.email,
      password: values.password,
    }
    dispatch(login(parameters))
    // const response = await axios.post('sign-in', {
    //   email: values?.email,
    //   password: values?.password,
    // })
    // if (response.data.message == 'success') {
    //   if (response.data.role === 'admin') {
    //     navigate('/admin')
    //   }
    //   if (response.data.role === 'salesman') {
    //     localStorage.setItem(
    //       'info_user',
    //       JSON.stringify({
    //         id: response.data.idUser,
    //         token: response.data.toke,
    //       })
    //     )
    //     navigate('/salesman')
    //   } else {
    //     navigate('/')
    //   }
    // } else if (response.data.message == 'no-active') {
    //   toast({
    //     title: `Your account has not been activated`,
    //     status: 'error',
    //     position: 'top',
    //     isClosable: true,
    //     duration: 2000,
    //     onCloseComplete() {
    //       setSubmitted(false)
    //     },
    //   })
    // } else {
    //   toast({
    //     title: `Incorrect account or password`,
    //     status: 'error',
    //     position: 'top',
    //     isClosable: true,
    //     duration: 2000,
    //     onCloseComplete() {
    //       setSubmitted(false)
    //     },
    //   })
    // }
  }

  if (isLoading || isLoadingPages) {
    return <Loading />
  }

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Center>
              <Heading
                style={{
                  fontFamily: 'Josefin Sans',
                  fontSize: 32,
                }}
                fontSize={'2xl'}
              >
                Đăng nhập
              </Heading>
            </Center>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={(values: Values) => {
                onSubmitSignIn(values)
                setSubmitted(true)
              }}
            >
              {(props) => (
                <Form>
                  <Field name={'email'}>
                    {({ field, form }: any) => (
                      <FormControl id='email'>
                        <FormLabel>Email</FormLabel>
                        <Input {...field} type='email' />
                      </FormControl>
                    )}
                  </Field>
                  <Field name='password'>
                    {({ field, form }: any) => (
                      <FormControl id='password'>
                        <FormLabel>Mật khẩu</FormLabel>
                        <Input {...field} type='password' />
                      </FormControl>
                    )}
                  </Field>
                  <Stack spacing={6}>
                    {/* <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <a
                    href={'/forgot-password'}
                    style={{
                      color: '#3182ce',
                    }}
                  >
                    Forgot password?
                  </a>
                </Stack>
                 */}
                    <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                      <Text>
                        Bạn chưa có tài khoản?
                        <a
                          href={'/sign-up'}
                          style={{
                            color: '#3182ce',
                          }}
                        >
                          Đăng ký
                        </a>
                      </Text>
                    </Stack>
                    <Stack spacing={10} pt={2}>
                      <Button
                        type='submit'
                        size='lg'
                        bg={Colors.pink}
                        isDisabled={isSubmitted}
                        color={'white'}
                        _hover={{
                          bg: Colors.white,
                          color: Colors.pink,
                          border: `1px solid ${Colors.pink}`,
                        }}
                      >
                        Đăng nhập
                      </Button>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>

            {/* <StyleDivider>
              <h2 className='divider line razor' contentEditable>
                Hoặc
              </h2>
            </StyleDivider>
            <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
              <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
                <Center>
                  <Text>Continue with Facebook</Text>
                </Center>
              </Button>
              <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack> */}
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
export default SignIn
