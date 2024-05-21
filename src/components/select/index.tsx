import { SelectProps } from './types.ts';

const Select = ({ label, options, onChange }: SelectProps) => {
  return (
    <div>
      <label>{label}</label>
      <select onChange={onChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
