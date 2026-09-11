import { formatCurrency, formatNumber } from '../utils/formatters';

interface WealthSummaryProps {
  age: string;
  medianWealth: number | null;
  bottleCount: number;
  bottlePrice?: number;
}

export function WealthSummary({
  age,
  medianWealth,
  bottleCount,
  bottlePrice,
}: WealthSummaryProps) {
  return (
    <div style={{ marginTop: '16px' }}>
      <div>
        Valitulla ikäluokalla ({age}) on keskimäärin{' '}
        <b>{formatCurrency(medianWealth, 'euroa')}</b> sijoitusvarallisuutta.
      </div>
      <div>
        Sillä saisi <b>{formatNumber(bottleCount)}</b> pulloa jaloviinaa
        {bottlePrice ? ` (${formatCurrency(bottlePrice, '€')} / pullo)` : ''}.
      </div>
    </div>
  );
}
