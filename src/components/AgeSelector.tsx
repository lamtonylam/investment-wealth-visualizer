import { Select } from '@mantine/core';
import { AGE_GROUPS } from '../constants/config';

interface AgeSelectorProps {
  value: string | null;
  onChange: (value: string | null) => void;
  disabled?: boolean;
}

export function AgeSelector({
  value,
  onChange,
  disabled = false,
}: AgeSelectorProps) {
  return (
    <Select
      label="Valitse ikäluokka"
      placeholder="Ikäluokka"
      data={AGE_GROUPS}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
