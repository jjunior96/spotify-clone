import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Degrade = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #6a316005, #1c1c1d66);
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-image: linear-gradient(to right, #6a3160, #14365e);
`;

export const Info = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.grid.header};
    display: flex;
    align-items: center;

    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`;

export const LeftContent = styled.div`
  ${({ theme }) => css`
    width: 30%;

    div {
      display: flex;
      max-width: 300px;
      justify-content: center;
      flex-direction: column;

      h2 {
        font-size: ${theme.font.sizes.xxxlarge};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.white};
      }

      p {
        font-size: ${theme.font.sizes.xlarge};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.white};
        margin-top: ${theme.spacings.xxsmall};
      }

      button {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.bold};
        padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
        background-color: ${theme.colors.green};
        color: ${theme.colors.white};
        margin-top: ${theme.spacings.medium};
        text-transform: uppercase;
        border-radius: 50px;
        border: none;
        transition: background-color 0.3s;

        &:hover {
          background-color: ${lighten(0.1, theme.colors.green)};
        }
      }
    }
  `}
`;

export const RightContent = styled.div`
  ${({ theme }) => css`
    width: 70%;
    height: calc(100vh - ${theme.grid.header});

    div {
      padding: ${theme.spacings.xsmall} 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: ${theme.spacings.xsmall};

      img {
        /* width: 100%; */
        max-width: 300px;
        overflow: hidden;
        border-radius: 4px;
      }
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.medium} 0;
    background-color: ${theme.colors.gray};
    display: flex;

    div {
      width: 100%;
      max-width: ${theme.grid.container};
      margin: 0 auto;

      h2 {
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.xxlarge};
        font-weight: ${theme.font.bold};
        margin-top: ${theme.spacings.medium};
        margin-bottom: ${theme.spacings.small};
      }

      section {
        display: flex;
        color: ${theme.colors.white};

        h3 {
          font-size: ${theme.font.sizes.xlarge};
          margin-bottom: ${theme.spacings.xsmall};
        }

        p {
          max-width: 300px;
          font-weight: ${theme.font.bold};
          line-height: ${theme.font.sizes.xlarge};
          margin-bottom: ${theme.spacings.medium};
        }

        a {
          color: ${theme.colors.green};
          font-weight: ${theme.font.bold};
          font-size: ${theme.font.sizes.small};
          text-transform: uppercase;
          margin-top: ${theme.spacings.small};
        }
      }
    }
  `}
`;
