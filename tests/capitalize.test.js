import capitalize from "../codes/capitalize"

describe("Capitalize", () => {
    test("mainul to be Mainul", () => {
        expect(capitalize("mainul")).toBe("Mainul");
    })
    test("Is Undefined", () => {
        expect(capitalize()).toBe("");
    })
    test("Is Null", () => {
        expect(capitalize(null)).toBe("");
    });
});