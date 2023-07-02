import Colors from "modules/Colors";
import styled from "styled-components";
export const FeaturedPostsStyle = styled.div`
  .content {
    margin-top: 96px;
    .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 39px;
      .item {
        height: 428px;
        display: flex;
        align-items: start;
        &__image {
          width: 209px;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &__content {
          padding: 26px 25px;
          .link {
            &__tag {
              font-size: 14px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0.2px;
              color: ${Colors.primaryTextColor};
              margin-bottom: 0;
            }
          }
          .heading {
          }
          .title {
            margin: 11px 0px 10px;
            h2 {
              font-size: 16px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0.1px;
              color: ${Colors.textColor};
              margin-bottom: 0;
            }
          }
          .description {
            max-width: 242px;
            p {
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              letter-spacing: 0.2px;
              margin-bottom: 0;
              color: ${Colors.secondTextColor};
            }
          }
          .price {
            margin-top: 16px;
            display: flex;
            align-items: center;
            gap: 5px;
            del {
              font-size: 16px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0.1px;
              color: ${Colors.secondTextColor};
            }
            p {
              font-size: 16px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0.1px;
              margin-bottom: 0;
              color: ${Colors.secondaryColor1};
            }
          }
          .colors {
            margin-top: 15px;
            ul {
              display: flex;
              align-items: center;
              gap: 6.08px;
              li {
                width: 16px;
                height: 16px;
                border-radius: 50%;
              }
            }
          }
          .button {
            margin-top: 60px;
            border: 1px solid ${Colors.primaryColor};
            border-radius: 37px;
            padding: 10px 20px;
            display: inline-flex;
            gap: 10px;
            color: ${Colors.primaryTextColor};
            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0.2px;
            }
            i {
              margin-bottom: 0;
              line-height: unset;
            }
          }
        }
      }
    }
  }
`;
