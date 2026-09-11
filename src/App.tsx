import './App.css';
import { useState } from 'react';
import { Container } from '@mantine/core';
import { Header } from './components/Header';
import { AgeSelector } from './components/AgeSelector';
import { WealthSummary } from './components/WealthSummary';
import { BottleVisualizer } from './components/BottleVisualizer';
import { useStatsData } from './hooks/useStatsData';
import { calculateBottleCount } from './utils/calculations';
import { DEFAULT_JALOVIINA_PRICE } from './constants/config';

function App() {
  const { data, isLoading } = useStatsData();
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const selectedRow = data?.find(row => row.ika === selectedAge) ?? null;
  const medianWealth = selectedRow?.percentiles?.p50 ?? null;
  const bottleCount = calculateBottleCount(
    medianWealth,
    DEFAULT_JALOVIINA_PRICE
  );

  return (
    <Container size="md" py="xl">
      <Header />
      <AgeSelector
        value={selectedAge}
        onChange={setSelectedAge}
        disabled={isLoading}
      />

      {selectedRow && (
        <>
          <WealthSummary
            age={selectedAge ?? ''}
            medianWealth={medianWealth}
            bottleCount={bottleCount}
          />
          <BottleVisualizer count={bottleCount} />
        </>
      )}
    </Container>
  );
}

export default App;
