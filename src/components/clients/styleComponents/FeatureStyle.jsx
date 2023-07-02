import Colors from "modules/Colors";
import styled from "styled-components";
export const FeatureStyle = styled.div`
  padding: 80px 0;
  .feature {
    text-align: center;
    &__top {
      margin-bottom: 80px;
      .heading {
        h2 {
          color: #737373;
          font-size: 18px;
          letter-spacing: 0.2px;
          font-weight: 400;
        }
      }
      .title {
        h3 {
          font-size: 24px;
          font-weight: 700;
          line-height: 32px;
          letter-spacing: 0.1px;
          color: #252b42;
          margin: 10px 0;
        }
      }
      .description {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #737373;
      }
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 239px);
    gap: 20.5px;
  }
  .button {
    margin-top: 71px;
    text-align: center;
    a {
      padding: 15px 40px;
      border: 1px solid ${Colors.primaryColor};
      border-radius: 5px;
      color: ${Colors.primaryColor};
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0.2px;
    }
  }
`;
