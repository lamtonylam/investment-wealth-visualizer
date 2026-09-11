export function calculateBottleCount(
  wealth: number | null,
  pricePerBottle: number
): number {
  if (wealth == null || wealth <= 0 || pricePerBottle <= 0) {
    return 0;
  }
  return Math.floor(wealth / pricePerBottle);
}
