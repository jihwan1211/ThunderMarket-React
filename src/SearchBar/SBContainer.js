import { useState } from "react";
import { styled } from "styled-components";

import Menu from "./Menu";
import SBLogo from "./SBLogo";
import SBMyMarket from "./SBMyMarket";
import SBSell from "./SBSell";
import SBTalk from "./SBTalk";
import SearchBar from "./SearchBar";
import Sellcenter from "./SellCenter";

const SBContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  color: #212121;
  border-bottom: 1px solid #e4e0e0;
`;

const SearchBarDiv = styled.div`
  display: flex;
  width: 1024px;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 35px;
`;

const SBContentContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;

const SBContentContainer2 = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

// @media screen and (max-width: 1024px) {
//   display: none;
// }

const SBContentMenu = styled.div`
  display: none;
  box-sizing: border-box;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

// @media screen and (max-width: 1024px) {
//   display: flex;
// }

const Img = styled.img`
  width: 20px;
  height: 16px;
  margin-right: 20px;
`;
// 마우스 hover시 나오는 메뉴바를 감싸는 container
const HoverMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
// hover시 나오는 div
const HoverMenudiv = styled.div`
  position: absolute;
  top: 15px;
  right: 25px;
  background-color: white;

  div {
    width: 110px;
    padding: 5px;
    border: 1px solid #e4e0e0;
    &:hover {
      background-color: rgb(247, 22, 176);
    }
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1024px;
  height: 70px;
`;

const SBContainer = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <SBContainerDiv>
      <SearchBarDiv>
        <SBContentContainer>
          <SBLogo></SBLogo>
        </SBContentContainer>

        <SBContentContainer>
          <SearchBar></SearchBar>
        </SBContentContainer>

        <SBContentContainer2>
          <SBSell />
          <SBMyMarket />
          <SBTalk />
        </SBContentContainer2>

        <SBContentMenu
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          {!hovered ? (
            <Img
              src={
                "https://m.bunjang.co.kr/pc-static/resource/9ddac97c001dd6e0c2eb.png"
              }
            ></Img>
          ) : (
            <HoverMenuContainer>
              <Img
                src={
                  "https://m.bunjang.co.kr/pc-static/resource/2519843d5dad3dc4d3b9.png"
                }
              ></Img>
              <HoverMenudiv>
                <SBSell></SBSell>
                <SBMyMarket></SBMyMarket>
                <SBTalk></SBTalk>
              </HoverMenudiv>
            </HoverMenuContainer>
          )}
        </SBContentMenu>
      </SearchBarDiv>

      <MenuContainer>
        <Menu />
        <Sellcenter />
      </MenuContainer>
    </SBContainerDiv>
  );
};

export default SBContainer;
