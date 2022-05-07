import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import productsJson from "./assets/data/products.json";
// const { products } = productsJson;
// console.table(products[0]);

// const f = {
//   category: "Cell Phones",
//   brand: "Apple"
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
