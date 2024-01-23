import styled from 'styled-components';

export const PageLayout = styled.div`
  min-height: 95vh;
  align-items: center;
  display: flex;
  flex-direction: column;

  & > *:not(.full-width-container) {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    max-width: 76rem;
    width: 100%;
    flex: 0;

    &:not(:where(header)) {
      flex: 1;
    }
  }

  footer {
    & > div:not(.full-width-container) {
      max-width: 76rem;
    }
  }
`;
