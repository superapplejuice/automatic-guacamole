import { InputProps } from './types.ts';

const Input = <InputValue extends readonly string[]>({
  label,
  value,
  onChange,
  type = 'text',
}: InputProps<InputValue>) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} type={type}/>
    </div>
  );
};

export default Input;
