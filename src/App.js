import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// import Header from "./components/header";

// Pages
import UCPage from "./pages/under-construction";
import HomePage from "./pages/Home";

import "./main.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <UCPage />
          </Route>
          <Route path="/dev-homepage">
            <HomePage />
          </Route>
        </Switch>
        {process.env.NODE_ENV === "development" && (<DebuggingOutlines />)}
      </BrowserRouter>
    );
  }
}

const DebuggingOutlines = createGlobalStyle`
  * {
    outline: 1px solid rgb(255 0 0 / 0.5);
  }
`;

export default App;
