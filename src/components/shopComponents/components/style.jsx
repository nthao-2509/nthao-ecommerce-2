import Colors from 'modules/Colors'
import styled from 'styled-components'
export const StyleShopDefault = styled.div`
  background-color: ${Colors.white};
  .shop {
    padding: 142px 0;
    .top {
      margin-bottom: 14.4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__left {
        .description {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          color: #8a8fb9;
        }
      }
      &__right {
        display: flex;
        align-items: center;
        gap: 30px;
        .item {
          display: flex;
          align-items: center;
          gap: 10px;
          span {
            width: 50%;
          }
          .icon {
            display: flex;
            align-items: center;
            gap: 8px;
            i {
              cursor: pointer;
              transition: all 0.4s ease;
              &:hover {
                color: ${Colors.pink};
              }
            }
          }
        }
      }
    }
  }
  .content__shop {
    display: flex;
    gap: 20px;
  }
`
export const StyleSideBar = styled.div`
  height: 100%;
  width: 25%;
  .sidebar {
    &__title {
      h3 {
        font-family: 'Josefin Sans';
        font-size: 20px;
        line-height: 30px;
        color: ${Colors.navyBlue};
        text-decoration: underline;
      }
    }
    &__content {
      .chakra-checkbox__label {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        text-align: center;

        color: #7e81a2;
      }
      .css-1ydjfm6[aria-checked='true'],
      .css-1ydjfm6[data-checked] {
        background-color: ${Colors.pink};
        border: none;
      }
    }
  }
`
