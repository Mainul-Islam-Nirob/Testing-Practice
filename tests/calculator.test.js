import calculator from "../codes/calculator";

describe('Calculator', () => {
    test('adds two numbers', () => {
        expect(calculator.add(5, 3)).toBe(8);
        expect(calculator.add(-1, 1)).toBe(0);
        expect(calculator.add(-1, -1)).toBe(-2);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(3, 5)).toBe(-2);
        expect(calculator.subtract(-1, -1)).toBe(0);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
        expect(calculator.multiply(-1, 1)).toBe(-1);
        expect(calculator.multiply(-1, -1)).toBe(1);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
        expect(calculator.divide(-6, -3)).toBe(2);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
    });
});