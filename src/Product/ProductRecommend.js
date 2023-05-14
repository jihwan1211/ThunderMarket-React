import { useState, useEffect, useContext } from "react";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import { useSelector, useDispatch } from "react-redux";
import { urlTotalArrayActions } from "../store";

const ProductRecommend = () => {
  const urlArray = useSelector((state) => state.urlTempArray.list);
  const urlTotalArray = useSelector((state) => state.urlTotalArray.list);
  const isPageFoot = useSelector((state) => state.isPageFoot.value);

  const dispatch = useDispatch();

  return (
    <div className="ProductRecommend">
      {urlTotalArray &&
        urlTotalArray.map((it) => {
          if (it.id > -1) return <Product url={it.url} id={it.id} />;
        })}
    </div>
  );
};

export default ProductRecommend;
