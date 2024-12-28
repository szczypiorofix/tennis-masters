import styled from 'styled-components';

const SpinnerDivContainerstyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

const SpinnerDivStyled = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { SpinnerDivContainerstyled, SpinnerDivStyled };

