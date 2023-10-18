import { List } from 'components/ContactList/ContactList.styled'
import {Item} from 'components/ContactItem/ContactItem'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  getContacts,
  getFilterValue,
  getIsLoading,
  getError,
} from 'redux/selectors';
import { Loader } from 'components/Loaders/Loader'

export const ContactList = () => {
  const stateOfContacts = useSelector(getContacts);
  const filtersValue = useSelector(getFilterValue);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchContacts());
  },[dispatch])

  const getVisibleContact = () => {
    const normalizedFilter = filtersValue.toLowerCase();
    return stateOfContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContact();

  return (
    <>
      {error && <p>{error}</p>}
      {stateOfContacts.length !== 0 && !error && (
        <List>
          {visibleContacts.map(contact => (
            <Item key={contact.id} contact={contact} />
          ))}
        </List>
      )}
      {isLoading && <Loader />}
    </>
  );
}





