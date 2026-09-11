import { useState, useEffect } from 'react';
import { getData } from '../utils/getStatsData';
import type { ParsedRow } from '../types';

export interface UseStatsDataResult {
  data: ParsedRow[] | null;
  isLoading: boolean;
  error: Error | null;
}

export function useStatsData(): UseStatsDataResult {
  const [data, setData] = useState<ParsedRow[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const fetchedData = getData();
      setData(fetchedData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error };
}
