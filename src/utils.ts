/**
 * Converts number to microunits
 * @param val number to be converted to microunits
 * @returns number that has been converted to microunits
 */
export const convertToMicroUnits = (val: number): number => {
  return val * 1000000;
};
/**
 * Converts number from microunits
 * @param val number to be converted from microunits
 * @returns number that has been converted from microunits
 */
export const convertFromMicroUnits = (val: number): number => {
  return val / 1000000;
};
