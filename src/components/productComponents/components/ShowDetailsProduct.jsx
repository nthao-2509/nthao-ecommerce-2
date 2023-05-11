import React from 'react'
import Slider from 'react-slick'
import ReactStars from 'react-rating-stars-component'
import { formatter } from 'config/numberFormat'
import parse from 'html-react-parser'
import { UrlServer } from 'config/UrlServer'
import { Flex, Stack } from '@chakra-ui/react'
const ShowDetailsProduct = ({ data }) => {
  const [imageHover, setImageHover] = React.useState()

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style }} onClick={onClick}></div>
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return <div className={className} style={{ ...style }} onClick={onClick}></div>
  }
  React.useEffect(() => {
    setImageHover(`${UrlServer}/image/${data?.images?.[0]}`)
  }, [!data?.images?.[0]])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className='detail'>
      <div className='detail__image'>
        <div className='detail__image-list'>
          <Slider {...settings}>
            {data?.images?.map((item) => {
              return <img src={`${UrlServer}/image/${item}`} alt={data?.nameProduct} onClick={(event) => setImageHover(event.target.src)} />
            })}
          </Slider>
        </div>
        <div className='detail__image-main'>
          <img src={imageHover} alt='image-product' />
        </div>
      </div>
      <div className='detail__product'>
        <div className='detail__product-title'>
          <h3>{data?.nameProduct}</h3>
        </div>
        <div className='detail__product-rating'>
          <ReactStars edit={false} value={4} size={24} activeColor='#ffd700' />
        </div>

        <div className='detail__product-price'>
          <span>{formatter.format(data?.priceProduct)}</span>
        </div>
        <Stack spacing={4} m={'10px 0 0'}>
          <Flex gap={2} align={'center'}>
            <i className='fa-solid fa-location-dot'></i>
            <span>{data?.address}</span>
          </Flex>
          <Flex gap={2} align={'center'}>
            <i className='fa-solid fa-shield-halved'></i>
            <span>Tin đã được duyệt</span>
          </Flex>
        </Stack>
        {/* <div className='detail__product-colors'>
          <h4 className='label'>Colors:</h4>
          <div className='list-color'>
            {data.colors.map((item, index) => (
              <div
                style={{
                  backgroundColor: item,
                }}
                key={index}
              />
            ))}
          </div>
        </div> */}
        {/* <div className='detail__product-description'> */}
        {/* </div> */}
        <div className='detail__product-button'>
          <a href=''>
            <span>Add To Card</span>
          </a>
        </div>
        {/* <div>{parse(data.detailProduct)}</div> */}
        {/* <div className='detail__product-categories'>
          <h4 className='label'>Categories:</h4>
          <span>{data.categories}</span>
        </div>
        <div className='detail__product-tags'>
          <h4 className='label'>Tags:</h4>
          <div className='list-tag'>
            {data.tags && (
              <>
                {data.tags.map((item, index) => {
                  return (
                    <>
                      &nbsp;<a href={item.key}>{data.tags.length !== index + 1 ? item.title + ',' : item.title}</a>
                    </>
                  )
                })}
              </>
            )}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ShowDetailsProduct
