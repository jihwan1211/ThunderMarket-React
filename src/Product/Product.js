import { useNavigate } from "react-router-dom";

const Product = ({ url, id, handleProductClicked }) => {
  // console.log(url);
  // console.log(id);
  const navigate = useNavigate();

  return (
    <div
      className="Product"
      onClick={() => {
        handleProductClicked();
        navigate(`/product/${id}`);
      }}
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
