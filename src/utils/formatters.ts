export function formatNumber(value: number): string {
  return value.toLocaleString('fi-FI');
}

export function formatCurrency(amount: number | null, unit: string = 'euroa'): string {
  if (amount == null || Number.isNaN(amount)) {
    return `0 ${unit}`;
  }
  return `${formatNumber(amount)} ${unit}`;
}
