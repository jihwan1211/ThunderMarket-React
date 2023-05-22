import "./Carousel.css";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const CarouselDiv = styled.div`
  width: 1024px;
`;

const CarouselImg = styled.img`
  width: 1024px;
`;

const Carousel = () => {
  return (
    <Container>
      <CarouselDiv>
        <CarouselImg
          src={"https://media.bunjang.co.kr/images/nocrop/972479333_w4116.jpg"}
        ></CarouselImg>
      </CarouselDiv>
    </Container>
  );
};

export default Carousel;
