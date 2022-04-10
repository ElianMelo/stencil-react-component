import { Component, h } from '@stencil/core';

@Component({
  tag: 'lj-root',
  styleUrl: 'lj-root.css',
  shadow: true,
})

export class LjRoot {

  changeCart = (price) => {
    console.log("Set price: " + price)
  }

  render() {
    return (
      <lj-product
        image="https://http2.mlstatic.com/D_NQ_NP_2X_888437-MLB49611880629_042022-F.webp"
        name="AMD RX 570"
        description="Graphics Card"
        price={3397.70}   
        changeCart={this.changeCart}
      >
      </lj-product>
    );
  }
}
