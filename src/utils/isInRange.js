export default function isInBounds(value, lowerBound, upperBound) {
  let intValue = parseInt(value, 10);
  return intValue <= upperBound && intValue >= lowerBound;
}
