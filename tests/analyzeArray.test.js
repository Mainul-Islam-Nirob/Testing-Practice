import analyzeArray from "../codes/analyzeArray";

describe('analyzeArray', () => {
    test('returns correct analysis for a valid array', () => {
        expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({ average: 3, min: 1, max: 5, length: 5 });
        expect(analyzeArray([10, 20, 30])).toEqual({ average: 20, min: 10, max: 30, length: 3 });
    });

    test('throws an error for an empty array', () => {
        expect(() => analyzeArray([])).toThrow("Input must be a non-empty array of numbers");
    });

    test('throws an error for non-array input', () => {
        expect(() => analyzeArray("not an array")).toThrow("Input must be a non-empty array of numbers");
        expect(() => analyzeArray(123)).toThrow("Input must be a non-empty array of numbers");
        expect(() => analyzeArray(null)).toThrow("Input must be a non-empty array of numbers");
    });
});