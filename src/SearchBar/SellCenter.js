import { styled } from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Img = styled.img`
  width: 72px;
  height: 26px;
`;

const SellCenter = () => {
  return (
    <Div>
      번개장터 판매자센터
      <Img
        src={
          "https://m.bunjang.co.kr/pc-static/resource/34a01cb11e0b14957f81.png"
        }
      ></Img>
    </Div>
  );
};

export default SellCenter;
