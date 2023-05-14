import "./App.css";
import Nav from "./Nav/NavAppDownload";
import NavContainer from "./Nav/NavContainer";
import SBContainer from "./SearchBar/SBContainer";
import Carousel from "./Carousel/Carousel";
import QRCodeContainer from "./QRCode/QRCodeContainer";
import ProductContainer from "./Product/ProductContainer";
import ProductDetail from "./Product/ProductDetail";

import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  urlTotalArrayActions,
  urlTempArrayActions,
  isPageFootActions,
} from "./store";

const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function App() {
  // 페이지 끝에 도달?
  const isPageFoot = useSelector((state) => state.isPageFoot.value);
  // 상품이 클릭됐는지 여부 판단
  const productClicked = useSelector((state) => state.isProductClicked.value);
  // 배열 key
  const arrayKey = useRef(0);

  const dispatch = useDispatch();
  const urlTempArray = useSelector((state) => state.urlTempArray.list);

  // 무작위 포켓몬 url 생성
  function makeRandURL() {
    let randNum = Math.floor(Math.random() * 150) + 1;
    return baseURL + randNum + ".png";
  }

  function makeArrayData() {
    const data = [
      {
        url: makeRandURL(),
        id: arrayKey.current++,
      },
      {
        url: makeRandURL(),
        id: arrayKey.current++,
      },
      {
        url: makeRandURL(),
        id: arrayKey.current++,
      },
      {
        url: makeRandURL(),
        id: arrayKey.current++,
      },
      {
        url: makeRandURL(),
        id: arrayKey.current++,
      },
    ];
    return data;
  }

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      // 화면 하단 위치 판단
      document.documentElement.clientHeight +
        document.documentElement.scrollTop +
        30 >=
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      )
    ) {
      dispatch(urlTempArrayActions.add(makeArrayData()));
      dispatch(isPageFootActions.set(true));
    } else {
      dispatch(isPageFootActions.set(false));
    }
  };

  useEffect(() => {
    dispatch(urlTotalArrayActions.add(urlTempArray));
  }, [urlTempArray]);

  return (
    <BrowserRouter>
      <div className="App">
        {!productClicked ? (
          <>
            <NavContainer />
            <SBContainer />
            <Carousel />
            <QRCodeContainer />
            <ProductContainer />
          </>
        ) : (
          <Routes>
            <Route
              path="/product/:id"
              element={<ProductDetail></ProductDetail>}
            ></Route>
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
