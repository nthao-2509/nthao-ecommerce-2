import React from 'react'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import { ChildrenRouteAdmin } from 'routes/ChidrenRouteAdmin'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import Loading from 'common/Loading'
import { User } from 'types/Types'
interface LinkItemProps {
  name: string
  icon: IconType
}
// const LinkItems: Array<TypeViewChildrenRouteAdmin> = ChildrenRouteAmin
// [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ]

export default function SidebarWithHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const { user, isSuccess, isLoading: isLoadingAuth } = useSelector((state: any) => state.auth)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!user || user.role === 'buyer') {
      setTimeout(() => {
        setIsLoading(false)
        navigate('/')
      }, 2000)
    } else {
      setIsLoading(false)
    }
  }, [user, navigate])

  // if (isLoading) {
  //   return <Loading />
  // }

  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size='full'
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav user={user} onOpen={onOpen} />
          <Box ml={{ base: 0, md: 60 }} p='4'>
            <Outlet />
          </Box>
        </>
      )}
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const location = useLocation()

  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {ChildrenRouteAdmin.filter((x: any) => x.roles.includes(location.pathname.split('/')[1])).map((link: any) => {
        return (
          <>
            {link !== 0 && (
              <NavItem href={link.path} key={link.name} icon={link.icon}>
                {link.name}
              </NavItem>
            )}
          </>
        )
      })}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
  href: string
}
const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
  const location = useLocation()
  return (
    <NavLink to={`/${location.pathname.split('/')[1]}${href}`}>
      <Link
        _activeLink={{ bg: 'cyan.400', color: 'white' }}
        _active={{ bg: 'cyan.400', color: 'white' }}
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        <Flex
          align='center'
          p='4'
          mx='4'
          borderRadius='lg'
          role='group'
          cursor='pointer'
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}
          _activeLink={{ bg: 'cyan.400', color: 'white' }}
          _active={{ bg: 'cyan.400', color: 'white' }}
          {...rest}
        >
          {icon && (
            <Icon
              mr='4'
              fontSize='16'
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </NavLink>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
  user: User
}
const MobileNav = ({ user, onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton display={{ base: 'flex', md: 'none' }} onClick={onOpen} variant='outline' aria-label='open menu' icon={<FiMenu />} />

      <Text display={{ base: 'flex', md: 'none' }} fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size='lg' variant='ghost' aria-label='open menu' icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack display={{ base: 'none', md: 'flex' }} alignItems='flex-start' spacing='1px' ml='2'>
                  <Text fontSize='sm'>
                    {user.userData.firstName} {user.userData.lastName}
                  </Text>
                  <Text fontSize='xs' color='gray.600'>
                    {user.role}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg={useColorModeValue('white', 'gray.900')} borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Thông tin tài khoản</MenuItem>
              {/* <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem> */}
              <MenuDivider />
              <MenuItem>Đăng xuất</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
