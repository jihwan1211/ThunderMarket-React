import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isProductClickedActions } from "../store";

const Product = ({ url, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className="Product"
      onClick={() => {
        dispatch(isProductClickedActions.toggle());
        navigate(`/product/${id}`);
      }} // 클릭한 상품 페이지로 이동
    >
      <a>
        <div className="ProductImgDiv">
          <img src={url} className="ProductImg"></img>
        </div>
        <div className="ProductDetailContainer">
          <div className="ProductName">우하하</div>
          <div className="ProductDetail">
            <div className="ProductPrice">250000</div>
            <span>3일전</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Product;
