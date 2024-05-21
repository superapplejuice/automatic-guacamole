import useFormReducer from '../../../hooks/useFormReducer';
import { UserFormType } from './types.ts';

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
      <div>
        <label>First name</label>
        <input value={values.firstName} onChange={(e) => handleSetValue('firstName', e.target.value)}/>
      </div>
      <div>
        <label>Last name</label>
        <input value={values.firstName} onChange={(e) => handleSetValue('lastName', e.target.value)}/>
      </div>
      <div>
        <label>Email</label>
        <input value={values.firstName} onChange={(e) => handleSetValue('email', e.target.value)}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
