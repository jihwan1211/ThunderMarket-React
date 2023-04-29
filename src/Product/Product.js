const Product = (props) => {
  console.log(props.url);
  return (
    <div className="Product">
      <a>
        <div className="ProductImgDiv">
          <img src={props.url} className="ProductImg"></img>
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
