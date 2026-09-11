import { DEFAULT_JALOVIINA_PRICE } from '../constants/config';

export async function getJaloviinaPrice(): Promise<number> {
  try {
    const response = await fetch('/api/jaloviina-price');
    const data = await response.json();
    const price = Number(data?.price);
    return price > 0 ? price : DEFAULT_JALOVIINA_PRICE;
  } catch {
    return DEFAULT_JALOVIINA_PRICE;
  }
}

