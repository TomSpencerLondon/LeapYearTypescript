export const leapYear = (year: number): boolean => {
  if (year % 4 !== 0){
    return false;
  }else if (year % 400 === 0) {
    return true;
  }
  return false;
};
