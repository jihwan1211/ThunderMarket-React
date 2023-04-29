import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav/NavAppDownload";
import NavContainer from "./Nav/NavContainer";
import SBContainer from "./SearchBar/SBContainer";
import Carousel from "./Carousel/Carousel";

import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import QRCodeContainer from "./QRCode/QRCodeContainer";
import ProductContainer from "./Product/ProductContainer";

function App() {
  return (
    <div className="App">
      <NavContainer />
      <SBContainer />
      <Carousel />
      <QRCodeContainer />
      <ProductContainer />
    </div>
  );
}

export default App;
