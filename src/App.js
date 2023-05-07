import "./App.css";
import Nav from "./Nav/NavAppDownload";
import NavContainer from "./Nav/NavContainer";
import SBContainer from "./SearchBar/SBContainer";
import Carousel from "./Carousel/Carousel";

import React, { Component, useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import QRCodeContainer from "./QRCode/QRCodeContainer";
import ProductContainer from "./Product/ProductContainer";

const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function App() {
  const [isPageFoot, setIsPageFoot] = useState(false);
  const [urlArray, setUrlArray] = useState([]);
  const arrayKey = useRef(0);

  function makeRandURL() {
    let randNum = Math.floor(Math.random() * 150) + 1;
    return baseURL + randNum + ".png";
  }

  function makeArrayData() {
    const data = [
      {
        url: makeRandURL(),
        key: arrayKey.current++,
      },
      {
        url: makeRandURL(),
        key: arrayKey.current++,
      },
      {
        url: makeRandURL(),
        key: arrayKey.current++,
      },
      {
        url: makeRandURL(),
        key: arrayKey.current++,
      },
      {
        url: makeRandURL(),
        key: arrayKey.current++,
      },
    ];
    return data;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      //
      document.documentElement.clientHeight +
        document.documentElement.scrollTop +
        15 >=
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
    ) {
      // setUrlArray([
      //   ...urlArray,
      //   makeRandURL(),
      //   makeRandURL(),
      //   makeRandURL(),
      //   makeRandURL(),
      //   makeRandURL(),
      // ]);
      setUrlArray(makeArrayData());
      setIsPageFoot(true);
    } else {
      setIsPageFoot(false);
    }
  };

  // console.log(isPageFoot);
  return (
    <div className="App">
      <NavContainer />
      <SBContainer />
      <Carousel />
      <QRCodeContainer />
      <ProductContainer urlArray={urlArray} isPageFoot={isPageFoot} />
    </div>
  );
}

export default App;
