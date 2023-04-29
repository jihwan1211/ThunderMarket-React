import NavAppDownload from "./NavAppDownload";
import NavFavorite from "./NavFavorite";
import NavLogin from "./NavLogin";
import NavMyMarket from "./NavMyMarket";
import "./Nav.css";

const NavContainer = () => {
  return (
    <div className="navContainer">
      <div className="nav">
        <div className="navContentContainer">
          <NavAppDownload />
          <NavFavorite />
        </div>
        <div className="navContentContainer">
          <NavLogin />
          <NavMyMarket />
        </div>
      </div>
    </div>
  );
};

export default NavContainer;
