export const verifyInputData = ({
  weightValue,
  dimensionValues,
  quantityValue,
}) => {
  const { height, length, width } = dimensionValues;
  return !(
    weightValue.length > 0 &&
    quantityValue.length > 0 &&
    height.length > 0 &&
    length.length > 0 &&
    width.length > 0
  );
};
