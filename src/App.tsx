'use client';

import { useState } from 'react';
import { Alert, Container, Skeleton } from '@mantine/core';
import { Header } from './components/Header';
import { AgeSelector } from './components/AgeSelector';
import { WealthSummary } from './components/WealthSummary';
import { BottleVisualizer } from './components/BottleVisualizer';
import { useStatsData } from './hooks/useStatsData';
import { useJaloviinaPrice } from './hooks/useJaloviinaPrice';
import { calculateBottleCount } from './utils/calculations';
import type { AgeGroup } from './types';

function App() {
  const { data, isLoading, error: statsError } = useStatsData();
  const { price: jaloviinaPrice, error: priceError } = useJaloviinaPrice();
  const [selectedAge, setSelectedAge] = useState<AgeGroup | null>(null);

  const error = statsError ?? priceError;

  const selectedRow = data?.find(row => row.ika === selectedAge) ?? null;
  const medianWealth = selectedRow?.percentiles?.p50 ?? null;
  const bottleCount = calculateBottleCount(
    medianWealth,
    jaloviinaPrice
  );

  return (
    <Container size="md" py="xl">
      <Header />

      {error && (
        <Alert variant="light" color="red" title="Virhe" mt="md">
          {error.message}
        </Alert>
      )}

      {isLoading ? (
        <Skeleton height={36} radius="sm" mt="md" />
      ) : (
        <AgeSelector
          value={selectedAge}
          onChange={(val) => setSelectedAge(val as AgeGroup | null)}
          disabled={isLoading}
        />
      )}

      {selectedRow && (
        <>
          <WealthSummary
            age={selectedAge ?? ''}
            medianWealth={medianWealth}
            bottleCount={bottleCount}
            bottlePrice={jaloviinaPrice}
          />
          <BottleVisualizer count={bottleCount} />
        </>
      )}
    </Container>
  );
}

export default App;
