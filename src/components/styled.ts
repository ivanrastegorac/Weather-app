import styled from 'styled-components';

export const PageLayout = styled.div`
  min-height: 100vh;
  align-items: center;

  & > *:not(.full-width-container, footer) {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    max-width: 76rem;
    width: 100%;
    flex: 0;

    &:not(:where(header, footer)) {
      flex: 1;
    }
  }

  footer > div:not(.full-width-container) {
    max-width: 76rem;
  }
`;
