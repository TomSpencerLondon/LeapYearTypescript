import {leapYear} from "../src/leap-year";

describe("Leap Year should", () => {
  it.each([
    [1997, false]
  ])("not be a leap year if not divisible by 4", (year: number, result: boolean) => {
    expect(leapYear(year)).toEqual(result);
  })

})
