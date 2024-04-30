export default function pxToRem(number: number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}
