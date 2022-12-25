import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";
import { CartContextProvider } from "./Components/Store/CartContext";
import { AuthContextProvider } from "./Components/Store/AuthContext";

ReactDOM.render(
  <AuthContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
