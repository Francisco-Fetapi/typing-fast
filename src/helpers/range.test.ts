import range from "./range";

describe("range function", () => {
  it("should create an array", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
