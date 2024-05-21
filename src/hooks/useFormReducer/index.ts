import React, { useEffect, useReducer } from 'react';
import { FormActions, FormState, UseFormReducerProps } from './types.ts';
import { hasErrors } from './helpers.ts';

const useFormReducer = <FormValues extends Record<string, unknown>>({
  initialValues,
  onSubmit,
  validation,
  options = {
    validateOnChange: true,
    validateOnSubmit: true,
  },
}: UseFormReducerProps<FormValues>) => {
  const formReducer: React.Reducer<FormState<FormValues>, FormActions<FormValues>> = (state, action) => {
    switch (action.type) {
      case 'SET_VALUE':
        return { ...state, values: { ...state.values, [action.payload.field]: action.payload.value } };
      case 'SET_ERROR':
        return {
          ...state,
          errors: { ...state.errors, [action.payload.field]: action.payload.error },
        };
      default:
        return state;
    }
  };

  const initialState: FormState<FormValues> = {
    values: initialValues,
    errors: Object.keys(initialValues).reduce((acc, key) => ({
      ...acc,
      [key]: false,
    }), {} as FormState<FormValues>['errors']),
    onSubmit,
    validation,
    options,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSetValue = (field: keyof FormValues, value: FormValues[keyof FormValues]) => dispatch({
    type: 'SET_VALUE',
    payload: { field, value },
  });

  const handleSetError = (field: keyof FormValues, error: string) => dispatch({
    type: 'SET_ERROR',
    payload: { field, error },
  });

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }

    if (options?.validateOnSubmit && !hasErrors(state.errors)) {
      return onSubmit(state.values, state.errors);
    }
    return onSubmit(state.values, state.errors);
  };

  useEffect(() => {
    if (validation && options?.validateOnChange) {
      const errors = validation(state.values);
      Object.entries(errors).forEach(([field, error]) => error && handleSetError(field as keyof FormValues, error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.values]);

  return { values: state.values, errors: state.errors, handleSetValue, handleSetError, handleSubmit };
};

export default useFormReducer;
