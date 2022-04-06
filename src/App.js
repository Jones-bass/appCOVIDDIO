
import React from "react";
import { CssBaseline } from "../node_modules/@material-ui/core/index";
import { StylesProvider } from '@material-ui/core';
import GlobalStyle from "./commons/styles/global-style";
import Main from "./container/Main/index";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
