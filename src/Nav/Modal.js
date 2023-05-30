import "./Nav.css";
import { useDispatch } from "react-redux";
import { isModalClickedActions } from "../store";

const Modal = () => {
  const dispatch = useDispatch();

  const aaa = () => {
    window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/",
      state: "userme",
    });
  };

  return (
    <section className="modal">
      <div className="modal-container flex justify-center align-center">
        <div className="modal-content flex-col align-center">
          <img
            src="https://m.bunjang.co.kr/pc-static/resource/56db3dd43075482b1d31.png"
            alt=""
            width="30"
            height="34"
          />
          <button
            className="close-btn"
            onClick={() => dispatch(isModalClickedActions.toggle())}
          >
            <img
              src="https://m.bunjang.co.kr/pc-static/resource/ee442d3dd827628bc5fe.png"
              alt=""
              width="24px"
              height="24px"
            />
          </button>
          <div>번개장터로 중고거래 시작하기</div>
          <div>간편하게 가입하고 상품을 확인하세요</div>
          <div className="flex-col justify-center align-center">
            <button
              className="sign-up sign-kakao"
              onClick={() => {
                aaa();
              }}
            >
              카카오로 이용하기
            </button>
            <button className="sign-up sign-facebook">
              페이스북으로 이용하기
            </button>
            <button className="sign-up sign-naver">네이버로 이용하기</button>
            <button className="sign-up sign-PA">본인인증으로 이용하기</button>
          </div>
          <div className="sign-info">
            <p>
              도움이 필요하시면 <strong>이메일</strong> 또는 고객센터
              <strong>1670-2901</strong>로 문의 부탁드립니다.
              <br />
              고객센터 운영시간:09~18시 (점심시간 12~13시, 주말/공휴일 제외)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
