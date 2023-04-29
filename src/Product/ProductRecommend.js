import Product from "./Product";

const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const ProductRecommend = () => {
  const productProps = {
    url: makeRandURL(),
  };

  return (
    <div className="ProductRecommend">
      <Product {...productProps} />
    </div>
  );
};

function makeRandURL() {
  let randNum = Math.floor(Math.random() * 150) + 1;
  return baseURL + randNum + ".png";
}

// //여기서부터는 구현 실패 동적 로딩...
// function loadProduct() {
//   if (
//     document.documentElement.clientHeight +
//       document.documentElement.scrollTop >=
//     Math.max(
//       document.body.scrollHeight,
//       document.documentElement.scrollHeight,
//       document.body.offsetHeight,
//       document.documentElement.offsetHeight,
//       document.body.clientHeight,
//       document.documentElement.clientHeight
//     )
//   ) {
//     insertNewDiv();
//   }
// }

// function insertNewDiv() {
//   const productProps = {
//     url: makeRandURL(),
//   };
//   return <Product {...productProps} />;
// }

export default ProductRecommend;
