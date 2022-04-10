import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'lj-product',
  styleUrl: './lj-product.css',
  shadow: true,
})
export class LjProduct {

  @Prop() image: string;
  @Prop() name: string;
  @Prop() description: string;
  @Prop() price: number;
  @Prop() changeCart: (price: number) => void;

  render() {
    return (
      <div class="Product">
        <img
          class="Product__img"
          src={this.image}
        ></img>
        <h2 class="Product__h2">{this.name}</h2>
        <h3 class="Product__h3">{this.description}</h3>
        <div class="Product__Price">
          <span class="Product__Price__span">$ {this.price}</span>
          <button class="Product__Price__button" onClick={() => {this.changeCart(this.price)}}>Buy</button>
        </div>
      </div>
    );
  }

}
