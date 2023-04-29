import Menu from "./Menu";
import SBLogo from "./SBLogo";
import SBMyMarket from "./SBMyMarket";
import SBSell from "./SBSell";
import SBTalk from "./SBTalk";
import SearchBar from "./SearchBar";
import "./SearchBar.css";
import Sellcenter from "./SellCenter";

const SBContainer = () => {
  return (
    <div className="SBContainer">
      <div className="SearchBar">
        <div className="SBContentContainer">
          <SBLogo></SBLogo>
        </div>
        <div className="SBContentContainer">
          <SearchBar></SearchBar>
        </div>
        <div className="SBContentContainer">
          <SBSell />
          <SBMyMarket />
          <SBTalk />
        </div>
      </div>
      <div className="MenuContainer">
        <Menu />
        <Sellcenter />
      </div>
    </div>
  );
};

export default SBContainer;
