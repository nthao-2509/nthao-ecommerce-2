import Colors from "modules/Colors";
import styled from "styled-components";
export const StyleCard = styled.div`
  p {
    margin-bottom: 0;
  }
  .image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    padding: 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    .title {
      h5 {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.1px;
        margin-bottom: 0;
      }
    }
    .description {
      p {
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: ${Colors.secondTextColor};
      }
    }
    .price {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      p {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.1px;
      }
      &__old {
        color: ${Colors.mutedColor};
      }
      &__new {
        color: ${Colors.secondaryColor1};
      }
    }
    .colors {
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6.08px;
        margin-bottom: 0;
        li {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }
  }
`;
