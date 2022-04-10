import './Store.css';
import { LjProduct } from '../stencil-generated';

function Store() {
  function changeCart() {
    console.log("Update Cart");
  }
  return (
    <LjProduct
        image="https://http2.mlstatic.com/D_NQ_NP_2X_888437-MLB49611880629_042022-F.webp"
        name="AMD RX 570"
        description="Graphics Card"
        price={3397.70}   
        changeCart={changeCart}
    >
    </LjProduct>
  );
}

export default Store;
