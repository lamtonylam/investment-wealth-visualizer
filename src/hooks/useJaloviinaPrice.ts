import { useState, useEffect } from 'react';
import { getJaloviinaPrice } from '../utils/jaloviinaPrice';
import { DEFAULT_JALOVIINA_PRICE } from '../constants/config';

export interface UseJaloviinaPriceResult {
  price: number;
  isLoading: boolean;
  error: Error | null;
}

export function useJaloviinaPrice(): UseJaloviinaPriceResult {
  const [price, setPrice] = useState<number>(DEFAULT_JALOVIINA_PRICE);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    getJaloviinaPrice()
      .then(fetchedPrice => {
        if (isMounted) {
          setPrice(fetchedPrice);
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

  return { price, isLoading, error };
}
