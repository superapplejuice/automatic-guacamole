import useFormReducer from '../../../hooks/useFormReducer';
import { ItemCategory, ItemFormType } from './types.ts';
import Input from '../../input';
import Select from '../../select';

const ItemForm = () => {
  const { values, handleSubmit, handleSetValue } = useFormReducer<ItemFormType>({
    initialValues: {
      name: '',
      description: '',
      category: undefined,
      cost: undefined,
    },
    onSubmit: (values) => alert(values),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        value={values.name}
        onChange={e => handleSetValue('name', e.target.value)}
      />
      <Input
        label="Description"
        value={values.description}
        onChange={e => handleSetValue('description', e.target.value)}
      />
      <Select
        label="Category"
        options={Object.entries(ItemCategory).map(([key, label]) => ({ value: key, label }))}
        onChange={e => handleSetValue('category', e.target.value)}
      />
      <Input
        label="Cost"
        value={values.cost}
        onChange={e => handleSetValue('cost', e.target.value)}
        type="number"
      />
    </form>
  );
};

export default ItemForm;
