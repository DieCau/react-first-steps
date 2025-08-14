import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 2 },
  { productName: 'Mario Bros 3', quantity: 5 },
  { productName: 'Play 5', quantity: 3 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      {itemInCart.map(({ productName, quantity }) => (
        <ItemCounter
          key={productName}
          productName={productName}
          quantity={quantity}
        />
      ))}

      {/* <ItemCounter productName='Nintendo Switch 2' quantity={5} />
      <ItemCounter productName='Play 5' quantity={3} />
      <ItemCounter productName='Attari 2000' quantity={6} />
      <ItemCounter productName='Super Mario 2' quantity={4} /> */}
    </>
  );
}
