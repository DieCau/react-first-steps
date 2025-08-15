// Configuraciones generales
// Montar el componente para testearlo
// Instalar Testing Library y usar "render"
// Realizar configuraciones en vite.config.ts

import { describe, test } from 'vitest';

import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    render(<MyAwesomeApp />);
    // console.log(container.innerHTML);
    screen.debug();
  });
});
