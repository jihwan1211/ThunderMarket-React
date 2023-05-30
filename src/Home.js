import { useSelector } from "react-redux";

import Carousel from "./Carousel/Carousel";
import Modal from "./Nav/Modal";
import NavContainer from "./Nav/NavContainer";
import ProductContainer from "./Product/ProductContainer";
import QRCodeContainer from "./QRCode/QRCodeContainer";
import SBContainer from "./SearchBar/SBContainer";

const HOME = () => {
  const modalClicked = useSelector((state) => state.isModalClicked.value);

  return (
    <div>
      {modalClicked ? <Modal></Modal> : <></>}
      <NavContainer />
      <SBContainer />
      <Carousel />
      <QRCodeContainer />
      <ProductContainer />
    </div>
  );
};

export default HOME;
