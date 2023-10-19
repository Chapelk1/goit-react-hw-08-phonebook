import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { editContact } from 'redux/contacts/operations';
import { Form, Label, Wrap, Input } from './EditForm.styled';
import { Btn } from './EditForm.styled';

export function EditForm({ name, number, id, onToggle }) {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const handleEdit = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;

    const contactExists = allContacts.some(
      contact => contact.name === name.value
    );
    if (contactExists) {
      return alert(`${name.value} is already in contacts.`);
    }

    dispatch(editContact({ id, name: name.value, number: number.value }));
    onToggle();
  };

  return (
    <Form onSubmit={handleEdit}>
      <Wrap>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            defaultValue={name}
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            defaultValue={number}
          />
        </Label>
      </Wrap>

      <Btn type="submit">Edit</Btn>
    </Form>
  );
}
