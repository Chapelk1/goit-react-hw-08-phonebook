import {
  ItemLi,
  Name,
  Number,
  Btn,
} from 'components/ContactItem/ContactItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';

export const Item = ({ contact: { name, id, number } }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading);
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <ItemLi>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Btn type="button" onClick={handleDelete} disabled={isLoading}>
        Delete
      </Btn>
    </ItemLi>
  );
};

