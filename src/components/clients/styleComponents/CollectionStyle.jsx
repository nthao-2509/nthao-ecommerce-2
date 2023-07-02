import Colors from "modules/Colors";
import styled from "styled-components";
export const CollectionStyle = styled.div`
  background-color: #fafafa;
  .collection {
    padding: 80px 0;
    background-color: #fafafa;
    &__top {
      text-align: center;
      margin-bottom: 48px;
      .title {
        h1 {
          font-size: 24px;
          line-height: 32px;
          letter-spacing: 0.1px;
          margin: 0 !important;
          font-weight: 600;
        }
      }
      .description {
        p {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.2px;
          line-height: 20px;
          color: ${Colors.secondTextColor};
          margin: 0 !important;
        }
      }
    }
    &__cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 242px 242px;
      gap: 16px;
      .item {
        position: relative;

        .image {
          img {
            object-fit: cover;
          }
        }
        .button {
          position: absolute;
          left: 31px;
          bottom: 26px;
          &__collection {
            padding: 10px 40px;
            background-color: ${Colors.white};
            color: ${Colors.dark};
            border-radius: 2px;
          }
        }
        &:first-child {
          grid-column: 1/3;
          grid-row: 1/3;
        }
        &:nth-child(2) {
          grid-column: 3/4;
          grid-row: 1/3;
        }
      }
    }
  }
`;
