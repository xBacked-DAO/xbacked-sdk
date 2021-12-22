export const convertToMicroUnits = (val: number): number => {
  return val * 1000000;
};

export const convertFromMicroUnits = (val: number): number => {
  return val / 1000000;
};
