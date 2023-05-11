import {
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import Breadcrumb from 'common/Breadcrumb'
import Colors from 'modules/Colors'
import Container from 'common/Container'

const breadcrumb = {
  title: 'Liên hệ với chúng tôi',
  breadcrumb: [
    {
      title: 'Trang chủ',
      href: '/',
    },
    {
      title: 'Liên hệ với chúng tôi',
      href: null,
    },
  ],
}

const Contact = () => {
  return (
    <>
      <Breadcrumb title={breadcrumb?.title} breadcrumb={breadcrumb?.breadcrumb} />

      <Container>
        <Flex>
          <Box
            bg={Colors.navyBlue}
            style={{
              width: '100%',
              margin: '50px 0',
            }}
            color='white'
            borderRadius='lg'
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem
                  style={{
                    width: '30%',
                  }}
                >
                  <Box w={'100%'}>
                    <Heading>Liên hệ</Heading>
                    {/* <Text mt={{ sm: 3, md: 3, lg: 5 }} color='gray.500'>
                      Fill up the form below to contact
                    </Text> */}
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems='flex-start'>
                        <Button
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='#DCE2FF'
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color='#1970F1' size='20px' />}
                        >
                          +123456789
                        </Button>
                        <Button
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='#DCE2FF'
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color='#1970F1' size='20px' />}
                        >
                          nvtai.20it4@vku.udn.vn
                        </Button>
                        <Button
                          size='md'
                          height='48px'
                          width='200px'
                          variant='ghost'
                          color='#DCE2FF'
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color='#1970F1' size='20px' />}
                        >
                          Nguyên Văn Tài
                        </Button>
                      </VStack>
                    </Box>
                    <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems='flex-start'>
                      <IconButton
                        aria-label='facebook'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size='28px' />}
                      />
                      <IconButton
                        aria-label='github'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size='28px' />}
                      />
                      <IconButton
                        aria-label='discord'
                        variant='ghost'
                        size='lg'
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size='28px' />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem
                  style={{
                    width: '50%',
                  }}
                >
                  <Box w={'100%'} bg='white' borderRadius='lg'>
                    <Box m={8} color='#0B0E3F'>
                      <VStack spacing={5}>
                        <FormControl id='name'>
                          <FormLabel>Tên của bạn</FormLabel>
                          <InputGroup borderColor='#E0E1E7'>
                            <InputLeftElement pointerEvents='none' children={<BsPerson color='gray.800' />} />
                            <Input type='text' size='md' />
                          </InputGroup>
                        </FormControl>
                        <FormControl id='name'>
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor='#E0E1E7'>
                            <InputLeftElement pointerEvents='none' children={<MdOutlineEmail color='gray.800' />} />
                            <Input type='text' size='md' />
                          </InputGroup>
                        </FormControl>
                        <FormControl id='name'>
                          <FormLabel>Tin nhắn</FormLabel>
                          <Textarea
                            borderColor='gray.300'
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder='message'
                          />
                        </FormControl>
                        <FormControl id='name' float='right'>
                          <Button variant='solid' bg='#0D74FF' color='white' _hover={{}}>
                            Gửi
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
        <div
          style={{
            padding: '0 0 150px',
          }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.7498463307993!2d108.24949407594998!3d15.974434741966984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiB2w6AgVHJ1eeG7gW4gdGjDtG5nIFZp4buHdCAtIEjDoG4!5e0!3m2!1svi!2s!4v1683665714517!5m2!1svi!2s'
            width='100%'
            height='450'
            style={{
              border: 0,
            }}
            loading='lazy'
          ></iframe>
        </div>
      </Container>
    </>
  )
}
export default Contact
