import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import {ProductListingProvider} from "./pages"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductListingProvider>
      <App />
    </ProductListingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
