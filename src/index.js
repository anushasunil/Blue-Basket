import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import {ProductListingProvider} from "./pages"
import {LoginContextProvider} from "./pages"
import {SignUpContextProvider} from "./pages"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <SignUpContextProvider>
    <LoginContextProvider>
    <ProductListingProvider>
      <App />
    </ProductListingProvider>
    </LoginContextProvider>
    </SignUpContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
