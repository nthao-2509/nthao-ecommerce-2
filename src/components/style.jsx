import Colors from 'modules/Colors'
import styled from 'styled-components'
export const StyleContainer = styled.div`
  max-width: 1177px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`
export const StyleHeader = styled.div`
  background-color: ${Colors.violet};
  color: ${Colors.white};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    &__right {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    &__left {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    i {
      margin: 0 8px;
    }
    span,
    i {
      transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover {
        cursor: pointer;
        color: ${Colors.hoverText};
      }
    }
  }
`
export const StyleCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.column}, 1fr);
  gap: 30px;
  padding-bottom: 50px;
  width: 100%;
  .cards {
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
`
export const StyleNavbar = styled.div`
  position: fixed;
  top: 38px;
  width: 100%;
  z-index: 999;
  background-color: ${Colors.white};
  font-weight: 600;
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    &__menu {
      display: flex;
      align-items: center;
      gap: 20px;
      .nav {
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        color: ${Colors.textColor};
        gap: 10px;
        justify-content: flex-start !important;
        align-items: center;
        display: flex !important;
        &__item {
          /* &:hover { */
          position: relative;
          z-index: 99;
          a {
            display: block;
            position: relative;
            z-index: 1;
            text-decoration: none;
            font-size: 16px;
            color: ${Colors.textColor};
            margin: 0;
            padding: 6px 17px;
            text-transform: uppercase;
            &::after {
              position: absolute;
              content: '';
              width: 0;
              bottom: 0;
              left: 0;
              height: 1px;
              background: ${Colors.pink};
              transition: all 0.5s;
            }
            &:hover {
              text-decoration: none !important;
              color: ${Colors.pink};
            }
          }
          .transition {
            transition: 0.3s ease-out;
            &:hover {
              text-decoration: none !important;
            }
          }
          &:hover > a:after {
            width: calc(100% - 46px);
            left: 23px;
          }
        }
        .menu__line {
          position: static !important;

          &:hover .sub {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          .sub {
            display: block;
            position: absolute;
            top: 60px;

            background-color: ${Colors.white};
            visibility: hidden;
            opacity: 0;
            transition: all 0.5s ease;
            transform: translateY(-20px);
            &__ctt {
              padding: 20px 0px;
              background: ${Colors.white};
            }
            &__item {
              width: 100px;

              &-list {
                width: 100%;
                padding: 0px;
                margin: 0;
                list-style: none;
                text-transform: uppercase;
                li {
                  position: relative;
                  z-index: 99;
                  float: none !important;

                  font-weight: 400;
                  padding: 0 !important;
                  display: list-item;
                  text-transform: uppercase;
                  text-align: -webkit-match-parent;
                  & > a {
                    display: block;
                    position: relative;
                    z-index: 1;
                    padding: 10px 20px;
                    color: ${Colors.textColor};
                    text-transform: none !important;
                    font-size: 13px !important;
                    text-transform: uppercase !important;
                    transition: all 0.4s ease;
                    &:hover {
                      background-color: ${Colors.offPurple};
                      color: ${Colors.skyBlue};
                    }
                  }
                }
              }
            }
          }
        }
      }
      /* .cart {
        background-color: ${Colors.white};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        gap: 15px;
        i,
        span {
          color: ${Colors.mainColor};
        }
        i {
          width: 12px;
          height: 12px;
        }
        span {
          font-size: 20px;
        }
      } */
    }
    &__search {
      display: flex;
      align-items: center;
      input {
        width: 100%;
        outline: none;
        border: 2px solid ${Colors.hoverText};
        padding: 10px 15px;
      }
      i {
        padding: 10px;
        background-color: ${Colors.pink};
        color: ${Colors.white};
        border: 1px solid ${Colors.pink};
        cursor: pointer;
        transition: all 0.4s ease;
        &:hover {
          background-color: transparent;
          color: ${Colors.pink};
        }
      }
    }
  }
`
export const StyleCarousel = styled.div`
  background-color: #f2f0ff;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    &__left {
      width: 60%;
      &-text {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;

        color: ${Colors.pink};
      }
      &-title {
        font-size: 25px;
        line-height: 50px;
        letter-spacing: 0.015em;
        color: ${Colors.dark};
      }
      &-description {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        color: ${Colors.textColor2};
      }
      &-button {
        margin-top: 27px;
        button {
          padding: 15px 40px;
          border: 1px solid ${Colors.pink};
          background-color: ${Colors.pink};
          font-size: 17px;
          line-height: 20px;
          letter-spacing: 0.02em;
          font-weight: 500;
          color: ${Colors.white};
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.4s ease;
          &:hover {
            color: ${Colors.pink};
            background-color: transparent;
          }
        }
      }
    }
    &__right {
      width: 40%;
      position: relative;
      .sale_of {
        font-weight: 'Josefin Sans';
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
        background-color: #00c1fe;
        padding: 20px;
        font-size: 35px;
        line-height: 44px;
        font-weight: 600;
        color: ${Colors.white};
      }
      .shape2 {
        position: absolute;
        width: 90%;
        height: 90%;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
        transition: border-radius 13s ease;
        background-color: #ecd2fa59;
        animation: border 10s infinite;
        z-index: -1;
      }
      .shape {
        position: absolute;
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
        transition: border-radius 13s ease;
        background-color: #ecd2fa59;
        animation: border 10s infinite;
        z-index: -1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  @keyframes border {
    0% {
      border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
    }
    50% {
      border-radius: 31% 69% 59% 41% / 28% 24% 76% 72%;
    }
    100% {
      border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
    }
  }
`
export const Shape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
  transition: border-radius 13s ease;
  background-color: #ecd2fa59;
  animation: border 10s infinite;
  z-index: -1;
  @keyframes border {
    0% {
      border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
    }
    50% {
      border-radius: 31% 69% 59% 41% / 28% 24% 76% 72%;
    }
    100% {
      border-radius: 58% 42% 38% 62% / 42% 55% 45% 58%;
    }
  }
`
export const StyleButton = styled.span`
  padding: 16px 34px;
  background-color: ${Colors.pink};
  font-family: 'Josefin Sans';
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: ${Colors.white};
  border-radius: 8px;
  border: 1px solid ${Colors.pink};
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: ${Colors.pink};
  }
`
export const StyleFooter = styled.div`
  background-color: #eeeffb;
  width: 100%;
  height: 479px;
  .footer {
    padding: 95px 0;
    display: flex;
    gap: 70px;
    .information {
      width: 377px;
      .input__email {
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 31px;
        input {
          padding: 14px calc(135px + 20px) 14px 20px;
          border: none;
          outline: none;
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: ${Colors.textColor2};
          border-radius: 3px;
          background-color: ${Colors.white};
          width: 100%;
        }
        button {
          position: absolute;
          right: 5px;
          width: 135px;
          padding: 10px 30px;
          border: 1px solid ${Colors.pink};
          background-color: ${Colors.pink};
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: ${Colors.white};
          border-radius: 3px;
          cursor: pointer;
          transition: all 0.4s ease;
          &:hover {
            background-color: transparent;
            color: ${Colors.pink};
          }
        }
      }
      .contact__info {
        margin-top: 25px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${Colors.textColor2};
        h3 {
          margin-bottom: 10px;
        }
      }
    }
    .list {
      width: calc(100% - 377px);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-between;
      .items {
        ul {
          margin: 0;
          padding: 0;
          li {
            list-style-type: none;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            margin: 21px 0;
            transition: all 0.4s ease;
            .nav-link {
              color: ${Colors.textColor2};
            }
            &:hover {
              .nav-link {
                color: ${Colors.pink};
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    width: 100%;
    background-color: #e7e4f8;
    .content {
      width: 100%;
      height: 53px;

      display: flex;
      justify-content: space-around;
      align-items: center;
      .right {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          width: 19.42px;
          height: 19.42px;
          object-fit: cover;
          transition: transform 0.4s ease-in-out;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
`
export const StyleBreadcrumb = styled.div`
  width: 100%;
  height: 286px;
  background-color: ${Colors.background};
  display: flex;
  align-items: center;
  h1 {
    margin: 0;
    padding: 0;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 7px;
    li {
      list-style-type: none;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin: 0;
      padding: 0;
      a {
        color: ${Colors.dark};
      }
      &.active {
        a {
          color: ${Colors.pink};
        }
        &::after {
          content: '.';
          font-family: 'Lato';
          font-style: normal;
          font-weight: 500;
          font-size: 35px;
          line-height: 19px;
          visibility: hidden;
        }
      }
      &.navlink {
        &::after {
          content: '.';
          font-family: 'Lato';
          font-style: normal;
          font-weight: 500;
          font-size: 35px;
          line-height: 19px;
          text-align: center;
          padding-left: 7px;
        }
      }
    }
  }
`
