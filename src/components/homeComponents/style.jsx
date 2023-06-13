import Colors from 'modules/Colors'
import styled from 'styled-components'
export const StyleFeatureProduct = styled.div`
  margin: 118px 0;
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding-bottom: 50px;
    &__item {
      position: relative;
      border-radius: 20px;
      width: 100%;
      height: 100%;
      box-shadow: 5px 4px 7px -1px #f6f7fb;
      -webkit-box-shadow: 5px 4px 7px -1px #f6f7fb;
      -moz-box-shadow: 5px 4px 7px -1px #f6f7fb;
      transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
      cursor: pointer;
      .icon {
        position: absolute;
        top: 0;
        left: 15px;
        visibility: hidden;
        display: flex;
        align-items: center;
        gap: 20px;
        transition: top 0.3s ease;
        i {
          cursor: pointer;
          background-color: transparent;
          padding: 8px;
          font-size: 15px;
          border-radius: 50%;
          border: 1px solid transparent;
          color: ${Colors.navyBlue};
          transition: all 0.4s ease;
          &:hover {
            background-color: #eeeffb;
          }
        }
      }
      &-button-view {
        position: absolute;
        background-color: ${Colors.green};
        top: 236px;
        left: 50%;
        transform: translateX(-50%);
        visibility: hidden;
        padding: 6px 11px;
        border: 1px solid ${Colors.green};
        border-radius: 5px;
        transition: top all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        a {
          font-family: 'Josefin Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 12px;
          color: ${Colors.white};
        }
        &:hover {
          background-color: transparent;
          a {
            color: ${Colors.green};
          }
        }
      }
      &-image {
        width: 100%;
        height: 236px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${Colors.gray};
        img {
          width: 70%;
          height: 70%;
          object-fit: contain;
        }
      }
      &-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
        transition: all 0.4s ease;
        .title {
          font-family: 'lato';
          font-style: normal;
          font-size: 17px;
          font-weight: 700;
          line-height: 22px;
          transition: all 0.4s ease;
          color: ${Colors.pink};
        }
        .colors {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin: 12px 0;
          .color {
            width: 14px;
            height: 4px;
            border-radius: 10px;
          }
        }
        .code {
          span {
            font-family: 'Josefin Sans';
            font-size: 15px;
            line-height: 16px;
            font-weight: 500;
            transition: all 0.4s ease;
            color: ${Colors.navyBlue};
          }
        }
        .price {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          line-height: 17px;
          transition: all 0.4s ease;
          color: ${Colors.navyBlue};
        }
      }
      &:hover {
        box-shadow: unset;
        .icon {
          top: 15px;
          visibility: visible;
        }
        .cards__item-button-view {
          visibility: visible;
          top: 190px;
        }
        .cards__item-content {
          background-color: ${Colors.offNavyBlue};
          .code {
            span {
              color: ${Colors.white};
            }
          }
          .title,
          .price {
            color: ${Colors.white};
          }
        }
      }
    }
  }
  .custom_pagination {
    background-color: ${Colors.pink};
    transition: padding 0.4s ease-out;
    &.swiper-pagination-bullet-active {
      padding: 0 5px;
      border-radius: 20px;
    }
  }
`
export const StyledLeatestProducts = styled.div`
  z-index: 1;
  .tabs {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      li {
        list-style-type: none;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        cursor: pointer;
        padding-bottom: 5px;

        &::before {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          background-color: ${Colors.pink};
          bottom: 0;
          left: 0;
        }
        &.active {
          color: ${Colors.pink};
          position: relative;
          &::before {
            transition: width 0.4s ease-in-out;
            width: 100%;
          }
        }
      }
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 50px 0;
    &__item {
      margin-bottom: 50px;
      cursor: pointer;
      position: relative;
      transition: all 0.4s ease;
      &-sale {
        position: absolute;
        top: 10px;
        left: 15px;
        img {
          width: 84px;
          height: 56px;
        }
      }
      &-icon {
        position: absolute;
        top: 55%;
        left: -20px;
        visibility: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        color: ${Colors.navyBlue};
        transition: left 0.4s ease;
        i {
          padding: 8px;
          border-radius: 50%;
          &:hover {
            background-color: #eeeffb;
          }
        }
      }
      &-image {
        background-color: #f7f7f7;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 267px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        .title {
          span {
            font-family: 'Josefin Sans';
            font-size: 16px;
            line-height: 19px;
            color: ${Colors.navyBlue};
            position: relative;
            padding-bottom: 5px;
            &::before {
              content: '';
              position: absolute;
              width: 100%;
              height: 2px;
              background-color: #eeeffb;
              bottom: 0;
              left: 0;
            }
          }
        }
        .price {
          span,
          del {
            font-family: 'Josefin Sans';
            font-size: 14px;
            line-height: 16px;
          }
          del {
            margin-left: 10px;
            color: ${Colors.red};
          }
        }
      }
      &:hover {
        .cards__item-image {
          background-color: ${Colors.white};
        }
        .cards__item-icon {
          left: 15px;
          visibility: visible;
        }
      }
    }
  }
`
export const StyledOffer = styled.div`
  margin-bottom: 135px;
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    gap: 40px;
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 45px 25px;
      box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      &-image {
        img {
          width: 65px;
          height: 42px;
          object-fit: contain;
        }
      }
      &-content {
        text-align: center;
        .title {
          margin: 38px 0 20px;
          font-family: 'Josefin Sans';
          font-size: 18px;
          line-height: 26px;
          color: ${Colors.navyBlue};
        }
        .description {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 26px;
          color: ${Colors.textColor2};
        }
      }
    }
  }
`
export const StyleBanner = styled.div`
  width: 100%;
  height: 579px;
  background-color: #f1f0ff;
  z-index: 1;
  .banner {
    display: flex;
    align-items: center;
    gap: 30px;
    &__left {
      &-image {
        position: relative;
        z-index: 1;
        img {
          width: 509px;
          height: 550px;
          object-fit: contain;
        }
      }
    }
    &__right {
      width: 50%;
      &-title {
        h3 {
          font-family: 'Josefin Sans';
          font-size: 35px;
          line-height: 132%;
          letter-spacing: 0.015em;
          color: ${Colors.navyBlue};
        }
      }
      &-description {
        ul {
          li {
            display: flex;
            align-items: start;
            gap: 20px;
            margin: 10px 0;
          }
          .dots {
            margin-top: 3px;
            border-radius: 50%;
            width: 7px;
            height: 7px;
          }
        }
      }
      &-button {
        display: flex;
        align-items: center;
        gap: 20px;
        .name {
          font-family: 'Josefin Sans';
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 0.02em;
          color: ${Colors.navyBlue};
        }
        .price {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: ${Colors.navyBlue};
        }
        button {
          padding: 14px 24px;
          background-color: ${Colors.pink};
          color: ${Colors.white};
          border: none;
          border-radius: 8px;
          /*  */
          font-family: 'Josefin Sans';
          font-size: 17px;
          line-height: 20px;
          letter-spacing: 0.02em;
        }
      }
    }
  }
`
export const StyleTrendingProduct = styled.div`
  margin: 135px 0 49px;
  .cards {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    &__item {
      padding: 11px;
      box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.4s ease;
      &:hover {
        .cards__item-content {
          h3 {
            color: ${Colors.pink};
          }
        }
      }
      &-image {
        background-color: #f5f6f8;
        width: 100%;
        height: 244px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 70%;
          height: 70%;
          object-fit: cover;
        }
      }
      &-content {
        padding: 15px;
        text-align: center;
        .title {
          h3 {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            color: ${Colors.navyBlue};
            margin-bottom: 8px;
          }
        }
        .price {
          span {
            font-family: 'Josefin Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;
            color: ${Colors.navyBlue};
          }
          del {
            margin-left: 20px;
            color: ${Colors.red};
          }
        }
      }
    }
  }
`
export const StyleCollection = styled.div``
export const StyleDiscountItem = styled.div`
  margin-top: 126px;
  h3 {
    margin-bottom: 33px;
  }
  .swiper-pagination-horizontal {
    top: 0 !important;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
  .swiper-pagination-bullet {
    width: unset;
    background-color: unset;
    border-radius: unset;
    margin: 0 10px !important;
  }
  .swiper-pagination-bullet-active {
    color: ${Colors.pink};
    padding-bottom: 10px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${Colors.pink};
      bottom: 0;
      left: 0;
    }
  }
  .swiper-wrapper {
    z-index: 11 !important;
  }
  .cards {
    z-index: 11;
    &__item {
      padding-top: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      &-left {
        width: 50%;
        .title {
          font-family: 'Josefin Sans';
          font-size: 35px;
          line-height: 132%;
          letter-spacing: 0.015em;
          color: ${Colors.navyBlue};
        }
        .text {
          font-family: 'Josefin Sans';
          font-size: 21px;
          line-height: 132%;
          letter-spacing: 0.015em;
          color: ${Colors.pink};
        }
        .description {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 17px;
          line-height: 30px;
          letter-spacing: 0.02em;
          color: ${Colors.textColor2};
        }
        .detail {
          margin: 28px 0;
          ul {
            padding: 0;
            margin: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: space-between;
            gap: 20px;
            li {
              list-style-type: none;
            }
          }
        }
        .button {
          button {
            padding: 20px 48px;
            background-color: ${Colors.pink};
            border: none;
            font-family: 'Josefin Sans';
            font-size: 17px;
            line-height: 20px;
            letter-spacing: 0.02em;
            color: ${Colors.white};
            border-radius: 8px;
            border: 1px solid ${Colors.pink};
            cursor: pointer;
            transition: all 0.4s ease;
            z-index: 99;
            &:hover {
              background-color: transparent;
              color: ${Colors.pink};
            }
          }
        }
      }
      &-right {
        width: 50%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`
export const StyleCategories = styled.div`
  margin: 79px 0;
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: calc(100% / 4 - 269px);
    &__item {
      padding: 0;
      margin: 0;
      position: relative;
      z-index: 1;
      cursor: pointer;
      .shape {
        width: 269px;
        height: 269px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${Colors.navyBlue};
        z-index: -1;
        border-radius: 50%;
        visibility: hidden;
      }
      .image {
        width: 269px;
        height: 269px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f6f7fb;
        border-radius: 100%;
        transition: transform 0.3s ease-in;
        img {
          width: 178px;
          height: 178px;
          object-fit: contain;
        }
      }
      .content {
        margin-top: 20px;
        width: 269px;
        /* max-width: ; */
        text-align: center;
        color: ${Colors.navyBlue};
        &__title {
          font-family: 'Josefin Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 20px;
        }
        &__price {
          font-family: 'Josefin Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          del {
            color: ${Colors.red};
            margin-left: 10px;
          }
        }
      }
      &:hover {
        .shape {
          visibility: visible;
        }
        .image {
          transform: translate(2%, -2%);
        }
      }
    }
  }
`
export const StyledAdvertisement = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  width: 100%;
  height: 462px;
  margin: 125px 0;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    h1 {
      width: 40%;
    }
  }
`
export const StyleBlog = styled.div`
  margin: 96px 0;
  h1 {
    margin-bottom: 80px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    &__item {
      width: 100%;
      box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      .image {
        width: 100%;
        height: 255px;
        border-radius: 10px;
        img {
          border-radius: 10px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &-content {
        padding: 19px 14px;
        .top {
          display: flex;
          align-items: center;
          gap: 30px;
          font-family: 'Josefin Sans';
          font-size: 14px;
          line-height: 16px;
          color: ${Colors.navyBlue};
          i {
            color: ${Colors.pink};
          }
          span {
            margin-left: 8px;
          }
        }
        .content {
          margin: 31px 0 19px;
          h3 {
            font-family: 'Josefin Sans';
            font-size: 18px;
            line-height: 21px;
            color: ${Colors.navyBlue};
          }
          .description {
            margin-top: 17px;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 30px;
            color: ${Colors.textColor2};
          }
        }
        .read__more {
          color: ${Colors.offNavyBlue};
          text-decoration: underline;
          transition: all 0.4s ease-in-out;
          &:hover {
            text-decoration: none;
          }
        }
      }
      &:hover {
        .content {
          h3 {
            color: ${Colors.pink};
          }
        }
        .read__more {
          color: ${Colors.pink};
        }
      }
    }
  }
`
