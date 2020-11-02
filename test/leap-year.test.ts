import {leapYear} from "../src/leap-year";

describe("Leap Year should", () => {
  it.each([
    [1997, false],
    [1999, false]
  ])("not be a leap year if not divisible by 4", (year: number, result: boolean) => {
    expect(leapYear(year)).toEqual(result);
  })

  it("be a leap year if divisible by 400", () => {
    expect(leapYear(1600)).toEqual(true);
  })

  it("not be a leap year if divisible by 100 but not by 400", () => {
    expect(leapYear(1800)).toEqual(false);
  })
})
