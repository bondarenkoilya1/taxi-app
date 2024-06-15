import { css } from "@emotion/react";
import styled from "@emotion/styled";
import emotionReset from "emotion-reset";

export const GlobalStyle = css`
  ${emotionReset}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  #root {
    font-family: "Arial", sans-serif;
  }

  .MuiAutocomplete-noOptions {
    display: none;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 1410px;
  margin: 0 auto;
`;
