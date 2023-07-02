import Colors from "modules/Colors";
import styled from "styled-components";
export const CarouselStyle = styled.div`
  max-width: 1292px;
  margin: 0 auto;
  margin-top: 42px;
  width: 100%;
  height: calc(100vh - 108px);
  background-image: linear-gradient(to right top, #96e9fb, #abecd6);
  border-radius: 20px;

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    &__left {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      padding: 0 126px;
      .year {
        color: #2a7cc7;
        text-transform: uppercase;
        font-weight: 600px;
      }
      .title {
        h1 {
          font-size: 50px;
          font-weight: 700;
          text-transform: uppercase;
        }
      }
      .description {
        font-size: 17px;
        color: ${Colors.secondTextColor};
        font-weight: 400;
      }
      .button {
        margin-top: 30px;
        .see-more {
          background-color: ${Colors.primaryColor};
          padding: 15px 40px;
          text-transform: uppercase;
          font-size: 20px;
          font-weight: 600;
          color: ${Colors.white};
          border-radius: 5px;
        }
      }
    }
    &__right {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(10%, -50%);
      width: 697px;
      height: 619px;
      .shape {
        position: absolute;
        background-color: ${Colors.white};
        z-index: -1;
        border-radius: 50%;
        &:nth-child(1) {
          width: 499.88px;
          height: 499.88px;
          top: 50%;
          transform: translateY(-55%);
          right: 20%;
        }
        &:nth-child(2) {
          width: 15.26px;
          height: 15.26px;
          top: 25%;
          right: 0;
          transform: translateX(10%);
          background-color: #977df4;
        }
        &:nth-child(3) {
          width: 62.67px;
          height: 62.67px;
          top: 0;
          left: 10%;
        }
        &:nth-child(4) {
          width: 31.24px;
          height: 31.24px;
          top: 50%;
          background-color: #977df4;
          right: 0;
          transform: translate(10%, -50px);
        }
      }
    }
  }
`;
