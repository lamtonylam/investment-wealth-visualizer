import parseDataset from './jsonParser';
import type { RawDataset } from './jsonParser';

async function getData() {
  const dataModule = await import('../data/2024.json', {
    assert: { type: 'json' },
  });
  const dataset = dataModule.default as RawDataset;
  const parsed = parseDataset(dataset);

  return parsed;
}

export { getData };
