import reverseString from "../codes/reverseString"

describe("Reverse String", () => {
    test("mainul to be luniam", () => {
        expect(reverseString("mainul")).toBe("luniam");
    })
    test("Is Undefined", () => {
        expect(reverseString()).toBe("");
    })
    test("Is Null", () => {
        expect(reverseString(null)).toBe("");
    });
});