import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Center,
  Text,
  InputRightElement,
  InputGroup,
  Box,
  HStack,
  Select,
  FormHelperText,
} from '@chakra-ui/react'
import React from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Colors from 'modules/Colors'
import { Field, Form, Formik } from 'formik'
import { message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from 'features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Loading from 'common/Loading'
import { AppDispatch } from 'store'
interface Values {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  role: string
  typeProduct: string
}

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false)
  const [valuePassword, setValuePassword] = React.useState<string>('')
  const [isSuccessConfirmPassword, setIsSuccessConfirmPassword] = React.useState<boolean>(true)
  const [valueMsgValidationPassword, setValueMsgValidationPassword] = React.useState<string>('')
  const [isSignUp, setIsSignUp] = React.useState<boolean>(false)
  const [messageApi, contextHolder] = message.useMessage()

  //
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const { user, isLoading: isLoadingAuth, isError, isSuccess, message: messageAuth } = useSelector((state: any) => state.auth)

  React.useEffect(() => {
    if (isError) {
      messageApi.open({
        type: 'error',
        content: messageAuth,
      })
    }
    dispatch(reset())
  }, [user, isLoadingAuth, isError, isSuccess, messageAuth, navigate, dispatch])

  const validationPassword = (values: string) => {
    const uppercaseRegExp = /(?=.*?[A-Z])/
    const lowercaseRegExp = /(?=.*?[a-z])/
    const digitsRegExp = /(?=.*?[0-9])/
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/
    const minLengthRegExp = /.{8,}/
    const passwordLength = values.length
    const uppercasePassword = uppercaseRegExp.test(values)
    const lowercasePassword = lowercaseRegExp.test(values)
    const digitsPassword = digitsRegExp.test(values)
    const specialCharPassword = specialCharRegExp.test(values)
    const minLengthPassword = minLengthRegExp.test(values)
    let errMsg = ''

    setIsSignUp(true)
    if (passwordLength === 0) {
      errMsg = 'Mật khẩu yếu'
    } else if (!uppercasePassword) {
      errMsg = 'Có ít nhất một ký hoa'
    } else if (!lowercasePassword) {
      errMsg = 'Có ít nhất một ký thường'
    } else if (!digitsPassword) {
      errMsg = 'Ít nhất một chữ số'
    } else if (!specialCharPassword) {
      errMsg = 'Có ít nhất một ký tự đặt biệt'
    } else if (!minLengthPassword) {
      errMsg = 'Có ít nhất 8 ký tự'
    } else {
      errMsg = ''
      setIsSignUp(false)
    }
    setValuePassword(values)
    setValueMsgValidationPassword(errMsg)
  }
  const onSubmitRegister = (values: Values) => {
    setIsSignUp(true)
    const parameters = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      role: values.role,
    }
    dispatch(register(parameters))
  }

  return (
    <>
      {isLoadingAuth ? (
        <Loading />
      ) : (
        <>
          {contextHolder}
          <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1}>
              <Image
                alt={'Login Image'}
                objectFit={'cover'}
                src={
                  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                }
              />
            </Flex>
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
                    Đăng ký
                  </Heading>
                </Center>
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    role: '',
                    password: '',
                    confirmPassword: '',
                    typeProduct: '',
                  }}
                  onSubmit={async (values: Values) => {
                    onSubmitRegister(values)
                  }}
                >
                  {(props) => (
                    <Form>
                      <HStack>
                        <Box>
                          <Field name={'firstName'}>
                            {({ field, form }: any) => (
                              <Box>
                                <FormControl id='firstName' isRequired>
                                  <FormLabel>Họ</FormLabel>
                                  <Input {...field} type='text' />
                                </FormControl>
                              </Box>
                            )}
                          </Field>
                        </Box>
                        <Box>
                          <Field name={'lastName'}>
                            {({ field, form }: any) => (
                              <Box>
                                <FormControl id='lastName' isRequired>
                                  <FormLabel>Tên</FormLabel>
                                  <Input {...field} type='text' />
                                </FormControl>
                              </Box>
                            )}
                          </Field>
                        </Box>
                      </HStack>

                      <Field name={'email'}>
                        {({ field, form }: any) => (
                          <Box>
                            <FormControl id='email' isRequired>
                              <FormLabel>Email</FormLabel>
                              <Input {...field} type='text' />
                            </FormControl>
                          </Box>
                        )}
                      </Field>
                      <Field name={'role'}>
                        {({ field, form }: any) => (
                          <FormControl id='role' isRequired>
                            <FormLabel>Loại tài khoản</FormLabel>
                            <Select {...field} placeholder='Loại tài khoản'>
                              <option value='buyer'>Người mua</option>
                              <option value='salesman'>Người bán</option>
                            </Select>
                          </FormControl>
                        )}
                      </Field>
                      {/* {valueRole === 'salesman' && (
                    <Field name={'typeProduct'}>
                      {({ field, form }: any) => (
                        <FormControl isRequired>
                          <FormLabel>Type of products</FormLabel>
                          <Select {...field} placeholder='Type of products'>
                            <option value='Vehicle'>Vehicle</option>
                            <option value='electronics-device'>Electronics device</option>
                            <option value='household-appliances-furniture'>Household appliances, furniture</option>
                            <option value='other'>Other ...</option>
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                  )} */}
                      <Field name={'password'}>
                        {({ field, form }: any) => (
                          <FormControl
                            onChange={(event: any) => {
                              validationPassword(event.target.value)
                            }}
                            isRequired
                          >
                            <FormLabel>Mật khẩu</FormLabel>
                            <InputGroup>
                              <Input {...field} type={showPassword ? 'text' : 'password'} />
                              <InputRightElement h={'full'}>
                                <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                            <FormHelperText color={'red.500'}>{valueMsgValidationPassword}</FormHelperText>
                          </FormControl>
                        )}
                      </Field>
                      <Field name={'confirmPassword'}>
                        {({ field, form }: any) => (
                          <FormControl
                            onChange={(event: any) => {
                              if (event.target.value === valuePassword) {
                                setIsSuccessConfirmPassword(true)
                                setIsSignUp(false)
                              } else {
                                setIsSuccessConfirmPassword(false)
                                setIsSignUp(true)
                              }
                            }}
                            isRequired
                          >
                            <FormLabel>Xác nhận mật khẩu</FormLabel>
                            <InputGroup>
                              <Input {...field} type={showConfirmPassword ? 'text' : 'password'} />
                              <InputRightElement h={'full'}>
                                <Button variant={'ghost'} onClick={() => setShowConfirmPassword((showPassword) => !showPassword)}>
                                  {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                              </InputRightElement>
                            </InputGroup>
                            {!isSuccessConfirmPassword && <FormHelperText color={'red.500'}>Xác nhận mật khẩu sai</FormHelperText>}
                          </FormControl>
                        )}
                      </Field>
                      <Stack spacing={10} pt={2}>
                        <Button
                          loadingText='Submitting'
                          type='submit'
                          size='lg'
                          bg={Colors.pink}
                          isDisabled={isSignUp}
                          color={'white'}
                          _hover={{
                            bg: Colors.white,
                            color: Colors.pink,
                            border: `1px solid ${Colors.pink}`,
                          }}
                        >
                          Đăng ký
                        </Button>
                      </Stack>
                    </Form>
                  )}
                </Formik>

                {/* <StyleDivider>
              <h2 className='divider line razor' contentEditable>
                HOẶC
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
                <Stack pt={6}>
                  <Text align={'center'}>
                    Đã có tài khoản?{' '}
                    <a
                      href='/sign-in'
                      style={{
                        color: '#3182ce',
                      }}
                    >
                      ĐĂNG NHẬP
                    </a>
                  </Text>
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </>
      )}
    </>
  )
}
export default SignUp
