import ProductRecommend from "./ProductRecommend";
import ProductRecommendHeader from "./ProductRecommendHeader";
import "./Product.css";

const ProductContainer = ({
  handleUrlTotalArray,
  handleProductClicked,
  isPageFoot,
}) => {
  // console.log(urlArray);
  return (
    <div className="ProductContainer">
      <div className="ProductSection">
        <ProductRecommendHeader />
        <ProductRecommend
          isPageFoot={isPageFoot}
          handleProductClicked={handleProductClicked}
          handleUrlTotalArray={handleUrlTotalArray}
        />
      </div>
    </div>
  );
};

export default ProductContainer;
