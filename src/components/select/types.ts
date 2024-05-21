import React from 'react';

export type SelectOption = {
  value: string;
  label: string;
}

export type SelectProps = {
  label: string;
  options: SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
