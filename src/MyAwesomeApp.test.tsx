// Configuraciones generales
// Montar el componente para testearlo
// Instalar Testing Library y usar "render"
// Realizar configuraciones en vite.config.ts

import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    const { container } = render(<MyAwesomeApp />);
    // screen.debug();

    // ! ASSERT
    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    // "toContain" es que contenga esa palabra
    expect(h1?.innerHTML).toContain('Diego');
    expect(h3?.innerHTML).toContain('Caucota');
  });

  test('should render firstName and lastName - screen', () => {
    // No tenemos la necesidad de llamar al container
    render(<MyAwesomeApp />);
    // screen.debug();

    //! ASSERT
    // En lugar de buscarlo por el rol
    // const h1 = screen.getByRole('heading', {
    //   level: 1,
    // });

    // Buscar por el testId
    const h1 = screen.getByTestId('first-name-title');

    expect(h1.innerHTML).toContain('Diego');
  });

  // Verificar que el DOM no fue alterado con "toMatchSnapshot"
  //! Recordar: si los cambios son correctos presione "u" y se actualiza
  test('should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  });
});
