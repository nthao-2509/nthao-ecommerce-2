import { StyleHeader } from 'components/style'
import React from 'react'
import Container from './Container'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Flex, Avatar, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, VStack, useColorModeValue } from '@chakra-ui/react'

import { FiChevronDown } from 'react-icons/fi'
import { Badge, Space } from 'antd'
import Colors from 'modules/Colors'
import { NavLink } from 'react-router-dom'
import { AppDispatch, RootState } from 'store'
import { Product, User } from 'types/Types'
import { logout } from 'features/auth/authSlice'

const Header = () => {
  const { isSuccess, user }: { isSuccess: boolean; user: User } = useSelector((state: RootState) => state.auth)
  const { cartItems }: { cartItems: Product[] } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch<AppDispatch>()

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <StyleHeader>
      <Container>
        <div className='header'>
          <div className='header__right'>
            <div className='header__right-email'>
              <span>
                <i className='fa-regular fa-envelope'></i>
                nvtai.20it4@vku.udn.vn
              </span>
            </div>
            <div className='header__right-phone'>
              <span>
                <i className='fa-solid fa-phone'></i>
                0123456789
              </span>
            </div>
          </div>
          <div className='header__left'>
            <div className='header__left-login'>
              {user ? (
                <Flex alignItems='center'>
                  <Menu>
                    <MenuButton transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
                      <HStack>
                        <Avatar
                          size='xs'
                          src={
                            'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                          }
                        />
                        <Text fontSize='sm'>
                          {user.userData.firstName} {user.userData.lastName}
                        </Text>
                        <Box display={{ base: 'none', md: 'flex' }}>
                          <FiChevronDown />
                        </Box>
                      </HStack>
                    </MenuButton>
                    <MenuList bg='white' borderColor='gray.200'>
                      <MenuItem color='#000'>Thông tin tài khoản</MenuItem>
                      <MenuItem color='#000'>Đơn mua</MenuItem>
                      <MenuDivider />
                      <MenuItem onClick={handleLogout} color='#000'>
                        Đăng xuất
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              ) : (
                <a href='/sign-in'>
                  <span>
                    Đăng nhập
                    <i className='fa-regular fa-user'></i>
                  </span>
                </a>
              )}
            </div>
            <div className='header__left-wishlist'>
              <NavLink to='/wish-list'>
                <span>
                  Yêu thích
                  <i className='fa-regular fa-heart'></i>
                </span>
              </NavLink>
            </div>
            <div className='header__left-cart'>
              <NavLink to='/cart'>
                <Space size='middle'>
                  <Badge size='small' count={cartItems.length}>
                    <i
                      style={{
                        color: Colors.white,
                      }}
                      className='fa-solid fa-cart-shopping'
                    ></i>
                  </Badge>
                </Space>
              </NavLink>
            </div>
          </div>
        </div>
      </Container>
    </StyleHeader>
  )
}

export default Header
