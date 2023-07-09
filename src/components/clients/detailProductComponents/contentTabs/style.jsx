import { MaxScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const DescriptionStyle = styled.div`
  padding: 24px 0 48px;
  .card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    .image {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
      }
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.1px;
      color: ${Colors.textColor};
      margin-bottom: 30px !important;
    }
    h6 {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: ${Colors.secondTextColor};
      text-align: justify;
    }
    .collapse__custom {
      border: none !important;
      background-color: transparent;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: ${Colors.secondTextColor};

      .ant-collapse-item {
        border: none;
        .ant-collapse-header {
          line-height: none;
          padding: 0;
          margin-top: 10px;
        }
      }
      .ant-collapse-item {
        &:last-child {
          margin-bottom: 20px !important;
        }
      }
      .ant-collapse-content-box {
        padding: 10px 10px;
        margin-left: 20px;
        .text-collapse {
          position: relative;
          padding: 0 10px;
          &::before {
            position: absolute;
            content: "";
            width: 5px;
            height: 5px;
            background-color: ${Colors.textColor};
            border-radius: 50%;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }
        }
      }
      .ant-collapse-content {
        border-top: none;
      }
    }
  }

  @media ${MaxScreenDevice.tablet_800} {
    padding: 24px 20px 48px;
    .card {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media ${MaxScreenDevice.mobileL} {
    padding: 24px 20px 48px;
    .card {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
