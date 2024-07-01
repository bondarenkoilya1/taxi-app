import { BrowserRouter as Router } from "react-router-dom";

import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

import { GlobalStyle } from "styled";

import { defaultTheme } from "themes";

import { Layout } from "layout";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Global styles={GlobalStyle} />
        <Layout />
      </Router>
    </ThemeProvider>
  );
};
