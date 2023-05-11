import styled from 'styled-components'
export const StyleAdminDashboard = styled.div`
  .view {
    width: 40%;
  }
  .dashboard {
    &__title {
      font-family: 'Public Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 25px;
      line-height: 26px;
      color: #23272e;
    }
    &__des {
      margin: 10px 0 30px;
      font-family: 'Public Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.02em;
      color: #8b909a;
    }
    &__total {
      margin-bottom: 20px;
      font-family: 'Public Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #23272e;
    }
    &__help-text {
      display: flex;
      align-items: center;
      gap: 20px;
      font-family: 'Public Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.02em;
      .number {
        color: #1eb564;
      }
      .detail {
        color: #8b909a;
      }
    }
  }
`
