import { styled } from "styled-components";

const Div = styled.div`
  position: relative;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  margin-left: 30px;
  &::after {
    content: "";
    width: 1px;
    height: 10px;
    border-right: 1px solid rgb(204, 204, 204);
    position: absolute;
    top: 8px;
    right: -15px;
  }
`;

const Img = styled.img`
  width: 23px;
  height: 24px;
  margin-right: 5px;
`;

const SBSell = () => {
  return (
    <Div>
      <A>
        <Img
          src={
            "https://m.bunjang.co.kr/pc-static/resource/bcc7abb5d531bcf26033.png"
          }
        ></Img>
        판매하기
      </A>
    </Div>
  );
};

export default SBSell;
