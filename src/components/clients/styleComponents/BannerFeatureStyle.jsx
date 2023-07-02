import Colors from "modules/Colors";
import styled from "styled-components";
export const BannerFeatureStyle = styled.div`
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  .left {
    display: flex;
    height: 498px;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right {
    display: flex;
    width: 447px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    .heading {
      h5 {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.1px;
        color: ${Colors.primaryColor};
        margin-bottom: 0;
      }
    }
    .title {
      h2 {
        font-size: 40px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0.2px;
        color: ${Colors.textColor};
        margin-bottom: 0;
      }
    }
    .description {
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: ${Colors.secondTextColor};
        margin-bottom: 0;
      }
    }
  }
`;
