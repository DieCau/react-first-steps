import { describe, expect, test } from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';
import { render } from '@testing-library/react';

describe('FirstStepApp', () => {
  test('should match snapshot', () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });
});
