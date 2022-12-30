import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <NavBar>hello frm app</NavBar>
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route exact path="/details" element={<Details/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/default" element={<Default/>} />
      </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
