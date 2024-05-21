export type FormStateOptions = {
  validateOnChange?: boolean;
  validateOnSubmit?: boolean;
}

export type FormState<FormValues extends Record<string, unknown>, FormErrors = Record<keyof FormValues, string>> = {
  values: FormValues;
  errors: FormErrors;
  onSubmit: (values: FormValues, errors: FormErrors) => Promise<void> | void;
  validation?: (values: FormValues) => FormErrors;
  options?: FormStateOptions;
}

export type FormActions<FormValues extends Record<string, unknown>> = {
  type: 'SET_VALUE';
  payload: { field: keyof FormValues; value: FormValues[keyof FormValues] };
} | {
  type: 'SET_ERROR';
  payload: { field: keyof FormValues; error: string };
};

export type UseFormReducerProps<FormValues extends Record<string, unknown>, FormErrors = Record<keyof FormValues, string>> = {
  initialValues: FormValues;
  onSubmit: (values: FormValues, errors: FormErrors) => Promise<void> | void;
  validation?: (values: FormValues) => FormErrors;
  options?: FormStateOptions;
};
