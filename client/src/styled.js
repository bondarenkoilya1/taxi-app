import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const colors = ``;

const variables = ``;

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
`;
