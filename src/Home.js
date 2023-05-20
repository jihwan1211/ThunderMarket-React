import Carousel from "./Carousel/Carousel";
import NavContainer from "./Nav/NavContainer";
import ProductContainer from "./Product/ProductContainer";
import QRCodeContainer from "./QRCode/QRCodeContainer";
import SBContainer from "./SearchBar/SBContainer";

const HOME = () => {
  return (
    <div>
      <NavContainer />
      <SBContainer />
      <Carousel />
      <QRCodeContainer />
      <ProductContainer />
    </div>
  );
};

export default HOME;
