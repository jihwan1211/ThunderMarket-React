import { styled } from "styled-components";

const Img = styled.img`
  width: 20px;
  height: 16px;
  margin-right: 20px;
`;

const Menu = () => {
  return (
    <div>
      <Img
        src={
          "https://m.bunjang.co.kr/pc-static/resource/9ddac97c001dd6e0c2eb.png"
        }
      ></Img>
    </div>
  );
};

export default Menu;
