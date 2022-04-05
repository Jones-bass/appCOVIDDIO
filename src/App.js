
import React from "react";
import { CssBaseline } from "../node_modules/@material-ui/core/index";
import { StylesProvider } from '@material-ui/core';
import GlobalStyle from "./commons/styles/global-style";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <div>
        Ola BB
      </div>
    </StylesProvider>
  );
}

export default App;
