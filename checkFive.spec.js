const checkFive = require("./checkFive");

describe("check five", () => {
  it("should return great than if the number is greater than five", () => {
    expect(checkFive(6)).toBe("6 is greater than 5.")
  });
  
  it("should return less than if the number is less to five", () => {
    expect(checkFive(1)).toBe("1 is less than 5.")
  });

  it("should return equal to if the number is equal to five", () => {
    expect(checkFive(5)).toBe("5 is equal to 5.")
  })
})
