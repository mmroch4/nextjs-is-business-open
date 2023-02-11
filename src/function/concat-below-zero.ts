export function concatBelowZero(number: number): string {
  return number < 10 ? `0${number}` : String(number);
}
