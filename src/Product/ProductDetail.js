import { useNavigate, useParams } from "react-router-dom";

import NavContainer from "../Nav/NavContainer";
import SBContainer from "../SearchBar/SBContainer";

const ProductDetail = ({ handleProductClicked, urlTotalArray }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const clickedProduct = urlTotalArray.filter((it) => {
    return it.id == id;
  });

  console.log(clickedProduct);
  return (
    <div>
      상품 상세 페이지
      <button
        onClick={() => {
          handleProductClicked();
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <div>
        <NavContainer></NavContainer>
        <SBContainer></SBContainer>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={clickedProduct[0].url}></img>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
