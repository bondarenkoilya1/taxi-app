import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Layout } from "./layout";
import { GlobalStyle } from "./styled";

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Layout />
    </Router>
  );
};
