import CardGrid from 'common/CardGrid'
import Container from 'common/Container'
import { StyleCardGrid } from 'components/style'
import React from 'react'
import { useSelector } from 'react-redux'
import { TypeDataProduct } from 'types/Types'

const WishList = () => {
  const { wishListItem } = useSelector((state: any) => state.wishList)

  return (
    <>
      <Container>
        <h1 className='main__title'>Danh sách yêu thích</h1>

        <StyleCardGrid column={4}>
          {wishListItem?.map((item: TypeDataProduct) => (
            <CardGrid wishList={true} data={item} key={item.id} />
          ))}
        </StyleCardGrid>
      </Container>
    </>
  )
}

export default WishList
