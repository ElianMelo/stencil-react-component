import './Store.scss';
import { LjProduct } from '../stencil-generated';
import { useState } from 'react';

function Store() {
  const [getCart, setCart] = useState(10000);

  const products = [
    {
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_888437-MLB49611880629_042022-F.webp",
      name: "AMD RX 570",
      description: "Graphics Card",
      price: 3397.70,
      changeCart
    },
    {
      image: "https://images.kabum.com.br/produtos/fotos/301078/placa-de-video-zotac-gaming-nvidia-geforce-rtx-3050-twin-edge-8gb-gddr6-ray-tracing-vr-ready-zt-a30500e-10m_1642188157_g.jpg",
      name: "NVIDIA Geforce RTX 3050",
      description: "Graphics Card",
      price: 2899.90,
      changeCart
    },
    {
      image: "https://images.kabum.com.br/produtos/fotos/92357/92357_index_g.jpg",
      name: "HyperX Cloud Alpha",
      description: "Headset",
      price: 399.90,
      changeCart
    },
    {
      image: "https://images.kabum.com.br/produtos/fotos/227818/headset-gamer-redragon-zeus-chroma-mk-ii-rgb-surround-7-1-usb-drivers-53mm-preto-vermelho-h510-rgb_1631555309_g.jpg",
      name: "Redragon Zeus X",
      description: "Headset",
      price: 359.90,
      changeCart
    },
    {
      image: "https://images.kabum.com.br/produtos/fotos/92748/cadeira-gamer-husky-snow-black-hsn-bk_1548093996_g.jpg",
      name: "Husky Gaming Snow",
      description: "Chair",
      price: 629.90,
      changeCart
    },
    {
      image: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/161612/Cadeira-Gamer-Presidente-Pro-EagleX-Girat-ria-E-Reclin-vel-Bra-o-3D-Flex-vel-E-Ajust-vel_1641491580_g.jpg",
      name: "President Pro EagleX",
      description: "Chair",
      price: 880.00,
      changeCart
    },
    {
      image: "https://images.kabum.com.br/produtos/fotos/102051/102051_1560366308_index_g.jpg",
      name: "Dualshock 4 PS4",
      description: "Controller",
      price: 427.41,
      changeCart
    },
    {
      image: "https://images.kabum.com.br/produtos/fotos/195148/controle-sem-fio-xbox-shock-blue_1628780812_g.jpg",
      name: "Xbox Shock Blue",
      description: "Controller",
      price: 449.91,
      changeCart
    },
    {
      image: "https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_g.jpg",
      name: "Xbox Series S",
      description: "Console",
      price: 2399.99,
      changeCart
    },
    {
      image: "https://images.kabum.com.br/produtos/fotos/135586/nintendo-switch-32gb-1x-joycon-neon-azul-vermelho-hbdskaba2_1610110214_g.jpg",
      name: "Nintendo Switch 32GB",
      description: "Console",
      price: 2499.00,
      changeCart
    }
  ]

  function changeCart(price: number) {
    if(getCart - price < 0.0) {
      alert('Saldo Insuficiente');
    } else {
      let numb: string = (getCart - price).toFixed(2);
      setCart(Number(numb));
    }
  }

  return (
    <div className="Store">
      <h1>store</h1>
      <span>Wallet: $ {getCart}</span>
      <div className="Store__Products">
        {
          products.map((item, index) => {
            return (
              <LjProduct
                key={index}
                data-testid={index}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                changeCart={item.changeCart}
              >
              </LjProduct>
            )
          })
        }
      </div>
    </div>
  );
}

export default Store;
