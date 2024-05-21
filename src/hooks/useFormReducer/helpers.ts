export const hasErrors = <FormErrors extends Record<string, string>>(errors: FormErrors): boolean =>
  Object.values(errors).some(error => error);
