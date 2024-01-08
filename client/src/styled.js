import { css } from "@emotion/react";
import styled from "@emotion/styled";
import emotionReset from "emotion-reset";

const variables = `
	:root {
		--font-family: 'Arial', sans-serif;
		--container-width: 1410px;
	}
`;

export const GlobalStyle = css`
  ${emotionReset}
  ${variables}

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
    font-family: var(--font-family);
  }

  .MuiAutocomplete-noOptions {
    display: none;
  }
`;

export const ContainerStyled = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
`;
