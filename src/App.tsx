import React from "react";
import { Provider } from "react-redux";

import { Root } from "./containers";
import store from "./store";
import { theme, ThemeProvider } from "./styles";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
