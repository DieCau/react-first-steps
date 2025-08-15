import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {
  test('should render with default values', () => {
    const itemName = 'Test item';

    //! ACT
    render(<ItemCounter itemName={itemName} />);

    //! ASSERT
    expect(screen.getByText(itemName)).toBeDefined();
    expect(screen.getByText(itemName)).not.toBeNull();
  });

  test('should render with custom quantity', () => {
    const itemName = 'Nintendo Switch 2';
    const quantity = 10;

    //! ACT
    render(<ItemCounter itemName={itemName} quantity={quantity} />);

    //! ASSERT
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test('should increase count when +1 button is pressed', () => {
    render(<ItemCounter itemName={'Test item'} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole('button');
    // Para disparar un evento usamos "fireEvent" de Testing Library
    //! ACT
    fireEvent.click(buttonAdd);

    //! ASSERT
    expect(screen.getByText('2')).toBeDefined();
  });

  test('should decrease count when -1 button is pressed', () => {
    const quantity = 5;
    render(<ItemCounter itemName={'Test item'} quantity={quantity} />);

    const [, buttonSubtract] = screen.getAllByRole('button');
    // Para disparar un evento usamos "fireEvent" de Testing Library
    //! ACT
    fireEvent.click(buttonSubtract);

    //! ASSERT
    expect(screen.getByText('4')).toBeDefined();
  });

  test('should not decrease count when -1 button is pressed and quantity is 1', () => {
    const quantity = 1;
    render(<ItemCounter itemName={'Test item'} quantity={quantity} />);
    const [, buttonSubtract] = screen.getAllByRole('button');
    // Para disparar un evento usamos "fireEvent" de Testing Library
    //! ACT
    fireEvent.click(buttonSubtract);

    //! ASSERT
    expect(screen.getByText('1')).toBeDefined();
  });
});
