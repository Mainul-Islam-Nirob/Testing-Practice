import caesarCipher from "../codes/caesarCipher";

describe('caesarCipher', () => {
    test('shifts letters correctly', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });

    test('preserves case', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('aBcDeFg', 1)).toBe('bCdEfGh');
    });

    test('leaves non-alphabetical characters unchanged', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('1234!@#$%^&*()', 5)).toBe('1234!@#$%^&*()');
    });

    test('handles negative shifts', () => {
        expect(caesarCipher('Khoor, Zruog!', -3)).toBe('Hello, World!');
        expect(caesarCipher('abc', -1)).toBe('zab'); 
    });

    test('handles large shifts', () => {
        expect(caesarCipher('Hello', 29)).toBe('Khoor');
        expect(caesarCipher('Hello', -29)).toBe('Ebiil');
    });
});