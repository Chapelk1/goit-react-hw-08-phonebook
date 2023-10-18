import { Label, Input } from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch()

  const changeFilter = (e) => {
    const { value } = e.target;
    dispatch(filteredContacts(value));
  }

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={changeFilter} />
    </Label>
  );
};


