import { parseDataset } from './jsonParser';
import type { RawDataset } from './jsonParser';
import rawData from '../data/2024.json';

function getData() {
  return parseDataset(rawData as unknown as RawDataset);
}

export { getData };
