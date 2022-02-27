import React from "react";
import { UsersContainer } from "./containers/users";
import { GlobalStyles } from "./global-styles";
import "normalize.css";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <UsersContainer />
    </>
  );
};

export default App;
