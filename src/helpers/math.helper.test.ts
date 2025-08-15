// Importar test desde vitest
import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
    test('Should add two positives numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        // Se lee: Se espera que el "resultado" sea...
        expect(result).toBe(a + b);
    });

    test('Should add two negatives numbers', () => {
        // ! 1. Arrange
        const a = -2;
        const b = -4;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        // Se lee: Se espera que el "resultado" sea...
        expect(result).toBe(a + b);
    });
});

describe('subtractor', () => {
    test('Should subtract two positives numbers', () => {
        const a = 2;
        const b = 2;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });

    test('Should subtract one negative and one positive numbers', () => {
        const a = 2;
        const b = -2;

        const result = subtract(a, b);

        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {
    test('Should multiply two positives numbers', () => {
        const a = 2;
        const b = 4;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });

    test('Should multiply 0 x one positives numbers', () => {
        const a = 2;
        const b = 0;

        const result = multiply(a, b);

        expect(result).toBe(a * b);
    });
});
