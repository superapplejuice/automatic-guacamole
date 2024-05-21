import useFormReducer from '../../../hooks/useFormReducer';
import { UserFormType } from './types.ts';
import Input from '../../input';

const UserForm = () => {
  const { values, handleSetValue, handleSubmit } = useFormReducer<UserFormType>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => alert(values),
    validation: (values) => {
      const errors = {
        firstName: '',
        lastName: '',
        email: '',
      };

      if (!values.firstName) {
        errors.firstName = 'First name is required';
      }

      return errors;
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="First name"
        value={values.firstName}
        onChange={e => handleSetValue('firstName', e.target.value)}
      />
      <Input
        label="Last name"
        value={values.lastName}
        onChange={e => handleSetValue('lastName', e.target.value)}
      />
      <Input
        label="Email"
        value={values.email}
        onChange={e => handleSetValue('email', e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
