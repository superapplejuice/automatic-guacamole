import React from 'react';

export type InputProps<InputValue> = {
  label: string;
  value: React.InputHTMLAttributes<InputValue>['value'];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: React.HTMLInputTypeAttribute;
}
