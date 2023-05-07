import ProductRecommend from "./ProductRecommend";
import ProductRecommendHeader from "./ProductRecommendHeader";
import "./Product.css";

const ProductContainer = ({ urlArray, isPageFoot }) => {
  console.log(urlArray);
  return (
    <div className="ProductContainer">
      <div className="ProductSection">
        <ProductRecommendHeader />
        <ProductRecommend urlArray={urlArray} isPageFoot={isPageFoot} />
      </div>
    </div>
  );
};

export default ProductContainer;
