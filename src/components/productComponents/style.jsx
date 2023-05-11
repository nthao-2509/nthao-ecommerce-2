import Colors from 'modules/Colors'
import styled from 'styled-components'
export const StyledDetailProduct = styled.div`
  .detail {
    margin: 50px 0;
    padding: 13px;
    display: flex;
    align-items: start;
    gap: 44px;
    width: 100%;
    background-color: transparent;
    &__image {
      display: flex;
      align-items: center;
      gap: 30px;
      width: calc(30px + 151px + 375px);
      &-list {
        .slick-slider {
          width: 151px !important;
        }
        .slick-arrow {
          left: 50%;
          color: ${Colors.dark};
          &.slick-next {
            transform: translateX(-50%) rotate(90deg);
            top: 100%;
            &::before {
              content: '\f054';
              font-family: 'FontAwesome';
              color: ${Colors.navyBlue};
              font-weight: 600;

              font-size: 20px;
            }
          }
          &.slick-prev {
            top: -15px;
            transform: translateX(-50%) rotate(90deg);

            &::before {
              content: '\f053';
              font-family: 'FontAwesome';
              color: ${Colors.navyBlue};
              font-weight: 600;
              font-size: 20px;
            }
          }
        }
        img {
          width: 151px;
          height: 155px;
          object-fit: cover;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          &:hover {
            border-color: ${Colors.pink};
          }
        }
      }
      &-main {
        img {
          width: 375px;
          height: 487px;
          object-fit: cover;
        }
      }
    }
    &__product {
      width: calc(100% - (30px + 151px + 375px));
      .label {
        font-family: 'Josefin Sans';
        font-size: 16px;
        line-height: 19px;
        color: ${Colors.navyBlue};
      }
      &-title {
        h3 {
          font-family: 'Josefin Sans';
          font-size: 36px;
          line-height: 42px;
          color: ${Colors.navyBlue};
        }
      }

      &-price {
        font-family: 'Josefin Sans';
        font-size: 16px;
        line-height: 29px;
        text-transform: capitalize;
        display: flex;
        align-items: center;
        gap: 10px;
        color: 14px 0 12px;
        span {
          color: ${Colors.navyBlue};
        }
        del {
          color: ${Colors.pink};
        }
      }
      &-colors {
        display: flex;
        align-items: center;
        gap: 20px;
        margin: 12px 0;
        .list-color {
          display: flex;
          align-items: center;
          gap: 5px;
          div {
            width: 13px;
            height: 13px;
            border-radius: 50%;
          }
        }
      }
      &-description {
        font-family: 'Josefin Sans';
        font-size: 16px;
        line-height: 29px;
        color: ${Colors.textColor2};
      }
      &-button {
        margin: 34px 0;
        a {
          padding: 16px 40px;
          background-color: ${Colors.pink};
          border-radius: 8px;
          border: 1px solid ${Colors.pink};
          font-family: 'Josefin Sans';
          font-size: 16px;
          line-height: 29px;
          text-transform: capitalize;
          color: ${Colors.white};
          transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
          &:hover {
            background-color: transparent;
            color: ${Colors.pink};
          }
        }
      }
      &-categories {
        display: flex;
        gap: 15px;
        span {
          font-family: 'Josefin Sans';
          font-size: 16px;
          line-height: 19px;
          color: ${Colors.textColor2};
        }
      }
      &-tags {
        display: flex;
        align-items: center;
        gap: 15px;
        font-family: 'Josefin Sans';
        font-size: 16px;
        line-height: 19px;
        color: ${Colors.navyBlue};
        .list-tag {
          a {
            color: blue;
            text-decoration: underline;
          }
        }
      }
    }
  }
  .swiper-slide {
    height: unset !important;
  }
`
export const StyledRelatedProduct = styled.div`
  padding: 100px 0 50px;
  .cards__item {
    margin-top: 50px;
  }
`
