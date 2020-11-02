export const leapYear = (year: number): boolean => {
  const divisibleBy = (number: number): boolean => {
    return year % number === 0;
  }

  const notDivisibleBy = (number: number): boolean => {
    return year % number !== 0;
  }

  return divisibleBy(4) && !(divisibleBy(100) && notDivisibleBy(400));
};
