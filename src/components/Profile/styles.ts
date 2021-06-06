import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 50px;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.green};
    }

    p {
      margin-left: ${theme.spacings.xsmall};
    }

    svg {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;
