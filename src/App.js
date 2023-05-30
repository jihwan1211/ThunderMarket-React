import "./App.css";

import ProductDetail from "./Product/ProductDetail";
import HOME from "./Home";

import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserHistory } from "history";
import {
  urlTotalArrayActions,
  urlTempArrayActions,
  isPageFootActions,
  isProductClickedActions,
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

  //history
  const history = createBrowserHistory();

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

  //브라우저 뒤로가기 사용
  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    // 뒷정리 함수 이용
    return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          // 이거도 왜 있는지 잘 모르겠음

          setLocationKeys(([_, ...keys]) => keys);
          // setLocationKeys((keys) => [location.key, ...keys]);
          dispatch(isProductClickedActions.toggle());
          history.push("/");
          console.log("뒤로가기");
          console.log(productClicked);

          // 앞으로 가기
        } else {
          // ? 이건 왜 있는건지 잘 모르겠음
          setLocationKeys((keys) => [location.key, ...keys]);
          // // productClicked 해결
          // dispatch(isProductClickedActions.toggle());
          // console.log("in history", productClicked);
          // // 뒤로 가기
          // setLocationKeys(([_, ...keys]) => keys);
          console.log("앞으로가기");
        }
      }
    });
  }, [locationKeys, history]);

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
          <Routes>
            <Route path="/" element={<HOME />}></Route>
          </Routes>
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
