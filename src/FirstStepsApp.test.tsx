import { describe, expect, test, vi } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';
import { render, screen } from '@testing-library/react';

// Creamos un mock ficticio del componente hijo
vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: () => <div data-testid='ItemCounter' />,
}));

describe('FirstStepApp', () => {
  test('should match snapshot', () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCounter components', () => {
    render(<FirstStepsApp />);

    const itemCounters = screen.getAllByTestId('ItemCounter');

    //! ASSERT
    expect(itemCounters.length).toBe(3);
  });
});
