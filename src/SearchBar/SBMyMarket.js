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

const SBMyMarket = () => {
  return (
    <Div>
      <A>
        <Img
          src={
            "https://m.bunjang.co.kr/pc-static/resource/31370b164bc5b7cc4fef.png"
          }
        ></Img>
        내상점
      </A>
    </Div>
  );
};

export default SBMyMarket;
