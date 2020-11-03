import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import HomePage from "./pages/Home";
import Header from "./components/header";
import "./main.css";

const DebuggingOutlines = createGlobalStyle`
  * {
    outline: 1px solid rgb(255 0 0 / 0.5);
  }
`;

const MainLayout = ({ children }) => (
  <Fragment>
    {process.env.NODE_ENV === "development" && (<DebuggingOutlines />)}
    <Header />
    {children}
  </Fragment>
);

ReactDOM.render(
  <MainLayout>
    <HomePage />
  </MainLayout>,
  document.getElementById('root')
);
