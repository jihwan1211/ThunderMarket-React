import { useState, useEffect, useContext } from "react";
import Product from "./Product";
import ProductDetail from "./ProductDetail";

import { AppContext } from "../App";
const ProductRecommend = ({
  isPageFoot,
  handleProductClicked,
  handleUrlTotalArray,
}) => {
  const urlArray = useContext(AppContext);

  const [imgArray, setImgArray] = useState([]);
  useEffect(() => {
    setImgArray([...urlArray]);
    handleUrlTotalArray(imgArray);
  }, []);

  useEffect(() => {
    if (isPageFoot) {
      setImgArray([...imgArray, ...urlArray]);
      handleUrlTotalArray(imgArray);
    }
  }, [isPageFoot]);

  return (
    <div className="ProductRecommend">
      {imgArray &&
        imgArray.map((it) => {
          return (
            <Product
              url={it.url}
              id={it.id}
              handleProductClicked={handleProductClicked}
            />
          );
        })}
    </div>
  );
};

export default ProductRecommend;
