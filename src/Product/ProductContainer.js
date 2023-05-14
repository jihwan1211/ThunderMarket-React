import ProductRecommend from "./ProductRecommend";
import ProductRecommendHeader from "./ProductRecommendHeader";
import "./Product.css";

const ProductContainer = () => {
  // console.log(urlArray);
  return (
    <div className="ProductContainer">
      <div className="ProductSection">
        <ProductRecommendHeader />
        <ProductRecommend />
      </div>
    </div>
  );
};

export default ProductContainer;
