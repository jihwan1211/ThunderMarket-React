import { styled } from "styled-components";

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid rgb(247, 47, 51);
  width: 460px;
  height: 36px;
  padding: 0 15px;
`;

const Input = styled.input`
  border: none;
  width: 410px;
  color: rgb(102, 102, 102);
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
`;

const SearchBar = () => {
  return (
    <SearchBox>
      <div className="SearchBoxDiv">
        <Input placeholder={"상품명, 지역명, @상점명 입력"}></Input>
        <Img
          src={
            "https://m.bunjang.co.kr/pc-static/resource/2be3c66fa47ccd5ece2a.png"
          }
        ></Img>
      </div>
    </SearchBox>
  );
};

export default SearchBar;
