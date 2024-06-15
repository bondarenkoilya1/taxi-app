import { BrowserRouter as Router } from "react-router-dom";

import { Global } from "@emotion/react";
import { Layout } from "layout";
import { GlobalStyle } from "styled";

export const App = () => {
  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Layout />
    </Router>
  );
};
