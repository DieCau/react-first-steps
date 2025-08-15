// Importar test desde vitest
import { expect, test } from "vitest";
import { add } from "./math.helper";

test('Should add two positives numbers', () => {
    // ! 1. Arrange
    const a = 1
    const b = 2

    // ! 2. Act
    const result = add(a, b)

    // ! 3. Assert
    // Se lee: Se espera que el "resultado" sea...
    expect(result).toBe(a + b);
}); 