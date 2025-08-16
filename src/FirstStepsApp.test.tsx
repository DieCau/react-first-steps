import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';

// Creamos un componente externo donde se extrae el componente ItemCounter
// vi.fn es una funcion que simula return
const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid='ItemCounter' />;
});

vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// Creamos un mock ficticio del componente hijo
// vi.mock('./shopping-cart/ItemCounter', () => ({
// ItemCounter: (props: unknown) => (
// <div
//   data-testid='ItemCounter'
//   name={props.itemName}
//   quantity={props.quantity}
// />
//  ),
// }));

describe('FirstStepApp', () => {
  //! Despues de cada prueba limpiar todos los mocks con "vi.clearAllMocks"
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<FirstStepsApp />);

    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId('ItemCounter');

    //! ASSERT
    expect(itemCounters.length).toBe(3);
    // screen.debug();
  });

  test('should render ItemCounter with correct props', () => {
    render(<FirstStepsApp />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      itemName: 'Nintendo Switch 2',
      quantity: 2,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      itemName: 'Mario Bros 3',
      quantity: 5,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      itemName: 'Play 5',
      quantity: 3,
    });
  });
});
