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
    let isMounted = true;
    setIsLoading(true);

    getData()
      .then(fetchedData => {
        if (isMounted) {
          setData(fetchedData);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading, error };
}
