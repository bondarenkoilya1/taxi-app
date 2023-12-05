import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const colors = ``;

const variables = `
:root {
	--font-family: 'Arial', sans-serif;
	--container-width: 1410px;
}
`;

const fonts = ``;

export const GlobalStyle = createGlobalStyle`
${reset}
${colors}
${variables}
${fonts}

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
	font-family: var(--font-family)
}
`;

export const ContainerStyled = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
`;
