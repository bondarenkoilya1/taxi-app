import { createContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Global } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

import { GlobalStyle } from "styled";

import { defaultTheme } from "themes";

import { Layout } from "layout";

import { Header } from "components";

// todo: move
import type { State } from "types/store";

import Store from "./store";

const store = new Store();

export const Context = createContext<State>({ store });

const AppComponent = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <Context.Provider value={{ store }}>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Global styles={GlobalStyle} />
          <Header />
          <Layout />
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
};

export const App = observer(AppComponent);
