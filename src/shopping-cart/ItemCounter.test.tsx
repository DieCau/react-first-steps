import { render, screen } from '@testing-library/react';
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
});
