import {
  Form,
  Label,
  Wrap,
  Input,
  Btn,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts , getIsLoading } from 'redux/selectors';

export function ContactForm({onToggle}) {
  const allContacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch()
  
  const addToContact = e => {
    e.preventDefault();
    const {name, number} = e.target.elements

    const contactExists = allContacts.some(
      contact => contact.name === name.value
    );
    if (contactExists) {
      return alert(`${name.value} is already in contacts.`)
    }
    const contact = {
      name: name.value,
      number: number.value,
    };

    dispatch(addContact(contact));
    e.currentTarget.reset()
    onToggle();
  };

  return (
    <Form onSubmit={addToContact}>
      <Wrap>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      </Wrap>
      <Btn type="submit">
        {isLoading ? 'Loading...' : 'Add contact'}
      </Btn>
    </Form>
  );
}

// ===============================================

// export class OldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   inputValueHandler = e => {
//     const {name, value} = e.currentTarget
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Wrap>
//           <Label>
//             Name
//             <Input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={this.state.name}
//               onChange={this.inputValueHandler}
//             />
//           </Label>
//           <Label>
//             Number
//             <Input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={this.state.number}
//               onChange={this.inputValueHandler}
//             />
//           </Label>
//         </Wrap>
//         <Btn type="submit">Add contact</Btn>
//       </Form>
//     );
//   }
// }

