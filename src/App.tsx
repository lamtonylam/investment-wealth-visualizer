import './App.css';
import { useState, useEffect } from 'react';
import { getData } from './utils/getStatsData';
import { Select } from '@mantine/core';
import { type ParsedRow } from './utils/jsonParser';

function App() {
  const [data, setData] = useState<ParsedRow[] | null>(null);
  const [age, setAge] = useState<string | null>(null);

  const jaloviinaPrice = 20.6;

  useEffect(() => {
    getData().then(fetchedData => {
      setData(fetchedData);
    });
  }, []);

  const selectedRow = data?.find(row => row.ika === age) ?? null;
  const p50 = selectedRow?.percentiles?.p50 ?? null;
  const bottlesText = Math.floor(p50 != null ? p50 / jaloviinaPrice : 0);

  return (
    <>
      <h2>Sijoitusvarallisuus ikähaarukoittain visualisoituna</h2>
      <Select
        label="Valitse ikähaarukka"
        placeholder="Ikähaarukka"
        data={[
          '0-15',
          '16-24',
          '25-34',
          '35-44',
          '45-54',
          '55-64',
          '65-74',
          '75-',
        ]}
        value={age}
        onChange={setAge}
      />

      {selectedRow && (
        <>
          <div>
            {`Valitulla ikähaarukalla (${age}) on keskimäärin ${p50} euroa sijoitusvarallisuutta.`}
          </div>
          <div>{`Sillä saisi ${bottlesText} pulloa jaloviinaa.`}</div>
        </>
      )}
    </>
  );
}

export default App;
