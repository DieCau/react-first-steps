import { ItemCounter } from './shopping-cart/ItemCounter';

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      <ItemCounter productName='Nintendo Switch 2' quantity={5} />
      <ItemCounter productName='Play 5' quantity={3} />
      <ItemCounter productName='Attari 2000' quantity={6} />
      <ItemCounter productName='Super Mario 2' quantity={4} />
    </>
  );
}
