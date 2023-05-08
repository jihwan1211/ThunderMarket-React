import "./App.css";
import Nav from "./Nav/NavAppDownload";
import NavContainer from "./Nav/NavContainer";
import SBContainer from "./SearchBar/SBContainer";
import Carousel from "./Carousel/Carousel";

import React, {
  Component,
  useState,
  useEffect,
  useRef,
  createContext,
} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import QRCodeContainer from "./QRCode/QRCodeContainer";
import ProductContainer from "./Product/ProductContainer";
import ProductDetail from "./Product/ProductDetail";

const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export const AppContext = React.createContext();

function App() {
  const [isPageFoot, setIsPageFoot] = useState(false);
  const [urlArray, setUrlArray] = useState([]);
  const [urlTotalArray, setUrlTotalArray] = useState([]);
  const [productClicked, setProductClicked] = useState(false);
  const toggleProductClicked = () => setProductClicked(!productClicked);
  const arrayKey = useRef(0);

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
      setUrlArray(makeArrayData());
      setIsPageFoot(true);
    } else {
      setIsPageFoot(false);
    }
  };

  const handleProductClicked = () => {
    toggleProductClicked();
  };

  const handleUrlTotalArray = (array) => {
    setUrlTotalArray([...array]);
  };

  // console.log(urlTotalArray);
  return (
    <BrowserRouter>
      <AppContext.Provider value={urlArray}>
        <div className="App">
          {!productClicked ? (
            <>
              <NavContainer />
              <SBContainer />
              <Carousel />
              <QRCodeContainer />
              <ProductContainer
                isPageFoot={isPageFoot}
                handleProductClicked={handleProductClicked}
                handleUrlTotalArray={handleUrlTotalArray}
              />
            </>
          ) : (
            <Routes>
              <Route
                path="/product/:id"
                element={
                  <ProductDetail
                    handleProductClicked={handleProductClicked}
                    urlTotalArray={urlTotalArray}
                  ></ProductDetail>
                }
              ></Route>
            </Routes>
          )}
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
