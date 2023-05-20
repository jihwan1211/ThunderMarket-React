import { styled } from "styled-components";

import NavAppDownload from "./NavAppDownload";
import NavFavorite from "./NavFavorite";
import NavLogin from "./NavLogin";
import NavMyMarket from "./NavMyMarket";
import "./Nav.css";

const NavStyledContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e4e0e0;
`;

const NavStyled = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  color: #666666;
  width: 1024px;
  display: flex;
  justify-content: space-between;
`;

const NavStyledContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavStyledImg = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const NavStyledContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px 0 15px;
  height: 39px;
`;

const NavStyledBtn = styled.button`
  border: 0;
  background-color: transparent;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 13px;
  color: #666666;
`;

const NavContainer = () => {
  return (
    <NavStyledContainer>
      <NavStyled>
        <NavStyledContentContainer>
          <NavAppDownload />
          <NavFavorite />
        </NavStyledContentContainer>
        <NavStyledContentContainer>
          <NavLogin />
          <NavMyMarket />
        </NavStyledContentContainer>
      </NavStyled>
    </NavStyledContainer>
  );
};

export const NavImg = NavStyledImg;
export const NavContent = NavStyledContent;
export const NavBtn = NavStyledBtn;

export default NavContainer;
