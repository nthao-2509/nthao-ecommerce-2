import Colors from 'modules/Colors'
import styled from 'styled-components'
export const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 26px;
  .cards {
    &__item {
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 29px;
      box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      cursor: pointer;
      &-image {
        width: 284px;
        height: 197px;
        background-color: #f5f5f5;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &-content {
        .title {
          display: flex;
          align-items: center;
          gap: 67px;
          h3 {
            font-family: 'Josefin Sans';
            font-size: 18px;
            line-height: 21px;
            color: ${Colors.navyBlue};
          }
          .colors {
            display: flex;
            align-items: center;
            gap: 5px;
            .color {
              width: 11px;
              height: 11px;
              border-radius: 50%;
            }
          }
        }
        .price {
          margin: 13px 0 10px;
          font-family: 'Josefin Sans';
          font-size: 14px;
          line-height: 16px;
          span {
            color: ${Colors.navyBlue};
          }
          del {
            color: ${Colors.pink};
          }
        }
        .description {
          margin: 0 0 28px;
          span {
            font-family: 'Josefin Sans';
            font-size: 14px;
            line-height: 16px;
            color: ${Colors.textColor2};
          }
        }
        .icon {
          display: flex;
          align-items: center;
          gap: 31px;
          i {
            padding: 6px;
            font-size: 19px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${Colors.white};
            box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 50%;
            transition: all 0.4s ease-in-out;
            &:hover {
              color: ${Colors.pink};
              border-color: ${Colors.pink};
            }
          }
        }
      }
      &:hover {
        box-shadow: unset;
        border: 1px solid ${Colors.pink};
        border-radius: 8px;
        .title {
          h3 {
            color: ${Colors.pink};
          }
        }
      }
    }
  }
`
export const StyleButtonCustom = styled.div`
  margin-top: 46px;
  button,
  .button_style {
    display: block;
    width: 100%;
    padding: 11px 20px;
    text-align: center;
    background-color: ${Colors.pink};
    border: 1px solid ${Colors.pink};
    border-radius: 8px;
    color: ${Colors.white};
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      color: ${Colors.pink};
      background-color: transparent;
    }
  }
`
export const StyleDivider = styled.div`
  .divider {
    display: flex;

    &:before,
    &:after {
      content: '';
      flex: 1;
    }
  }
  .line {
    align-items: center;
    margin: 1em -1em;

    &:before,
    &:after {
      height: 1px;
      margin: 0 1em;
    }
  }
  .razor {
    &:before,
    &:after {
      box-shadow: 0 0.5px 0 ${Colors.pink};
      /* border-bottom: 0.5px solid ${Colors.pink}; */
    }
  }
`
