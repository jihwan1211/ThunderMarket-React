import { useState, useEffect } from "react";
import Product from "./Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductRecommend = ({ urlArray, isPageFoot }) => {
  const [imgArray, setImgArray] = useState([]);
  useEffect(() => {
    setImgArray([...urlArray]);
  }, []);

  useEffect(() => {
    if (isPageFoot) {
      setImgArray([...imgArray, ...urlArray]);
    }
  }, [isPageFoot]);

  return (
    <div className="ProductRecommend">
      {imgArray &&
        imgArray.map((it) => {
          return <Product url={it.url} />;
        })}
    </div>
  );

  return (
    <div className="ProductRecommend">
      <Routes>
        {imgArray &&
          imgArray.map((it) => {
            return (
              <Route
                path="/:id"
                element={<Product url={it.url} />}
                index
              ></Route>
            );
          })}
      </Routes>
    </div>
  );
};

export default ProductRecommend;
