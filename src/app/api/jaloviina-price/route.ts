import { NextResponse } from 'next/server';
import { DEFAULT_JALOVIINA_PRICE } from '@/constants/config';

const UPSTREAM_URL = process.env.JALOVIINA_PRICE_URL || 'https://alko.tonylam.iki.fi/';

export const revalidate = 300;

export async function GET() {
  let price = DEFAULT_JALOVIINA_PRICE;

  try {
    const res = await fetch(UPSTREAM_URL);
    const data = await res.json();
    const parsed = Number(data?.price);
    if (parsed > 0) price = parsed;
  } catch {
    // Fall back to DEFAULT_JALOVIINA_PRICE
  }

  return NextResponse.json(
    { price },
    { headers: { 'Cache-Control': 'public, max-age=300, s-maxage=300' } }
  );
}
