import { NavContent, NavBtn } from "./NavContainer";
import { useSelector } from "react-redux";

const NavMyMarket = () => {
  const KakaoLoginUserName = useSelector((state) => state.KakaoLogin.name);
  return (
    <NavContent>
      {KakaoLoginUserName === "" ? (
        <NavBtn>내상점</NavBtn>
      ) : (
        <NavBtn>{KakaoLoginUserName.replaceAll('"', "")} 상점</NavBtn>
      )}
    </NavContent>
  );
};

export default NavMyMarket;
