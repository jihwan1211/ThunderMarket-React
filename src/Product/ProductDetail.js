import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isProductClickedActions } from "../store";

import NavContainer from "../Nav/NavContainer";
import SBContainer from "../SearchBar/SBContainer";

const ProductDetail = () => {
  const urlTotalArray = useSelector((state) => state.urlTotalArray.list);
  // console.log(urlTotalArray);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(id);
  const clickedProduct = urlTotalArray.filter((it) => {
    return it.id == id;
  });

  console.log(clickedProduct);
  return (
    <div>
      상품 상세 페이지
      <button
        onClick={() => {
          dispatch(isProductClickedActions.toggle());
          navigate(-1);
        }} // 버튼 클릭시 이전 페이지 이동
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
