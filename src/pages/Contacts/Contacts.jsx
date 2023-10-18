import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section, Title, SecondTitle } from 'pages/Contacts/Contacts.styled'

export function Contacts() {
  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />

      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactList />
    </Section>
  );
}
