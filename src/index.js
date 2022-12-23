import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";
import { CartContextProvider } from "./Components/Store/CartContext";

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById("root")
);
