import { styled } from "styled-components";

const Div = styled.div`
  position: relative;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const Img = styled.img`
  width: 23px;
  height: 24px;
  margin-right: 5px;
`;

const SBTalk = () => {
  return (
    <Div>
      <A>
        <Img
          src={
            "https://m.bunjang.co.kr/pc-static/resource/32554a59cf002b3def10.png"
          }
        ></Img>
        번개톡
      </A>
    </Div>
  );
};

export default SBTalk;
