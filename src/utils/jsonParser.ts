export type Column = {
  code: string;
  text: string;
  type: string;
  comment?: string;
};

export type RawDataset = {
  columns: Column[];
  comments?: unknown[];
  data: Array<{ key: string[]; values: string[] }>;
  metadata?: unknown[];
};

export type ParsedRow = {
  year: string;
  sijoituslaji: string;
  ika: string;
  percentiles: Record<string, number>;
};

export function parseDataset(dataset: RawDataset): ParsedRow[] {
  return dataset.data.map(row => {
    const [year, sijoituslaji, ika] = row.key;

    const percentiles: Record<string, number> = {};
    let valueIndex = 0;
    for (let i = 0; i < dataset.columns.length; i++) {
      const col = dataset.columns[i];
      if (col.type === 'c') {
        const raw = row.values[valueIndex];
        const num =
          raw === null || raw === undefined || raw === '' ? NaN : Number(raw);
        percentiles[col.code] = Number.isNaN(num) ? NaN : num;
        valueIndex++;
      }
    }

    return {
      year,
      sijoituslaji,
      ika,
      percentiles,
    };
  });
}

export default parseDataset;
