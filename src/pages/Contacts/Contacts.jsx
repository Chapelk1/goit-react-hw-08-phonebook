import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  Section,
  Title,
  SecondTitle,
  Btn,
  Wrap,
} from 'pages/Contacts/Contacts.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';


export default function Contacts() {
    const [showModal, setShowModal] = useState(false); 

    const onToggleModal = () => {
      setShowModal(prevState => !prevState);
    };

  return (
    <Section>
      {showModal && (
        <Modal onToggle={onToggleModal}>
          <Title>Adding contact</Title>
          <ContactForm onToggle={onToggleModal} />
        </Modal>
      )}

      <SecondTitle>Contacts</SecondTitle>
      <Wrap>
        <Filter />
        <Btn type="button" onClick={onToggleModal}>
          Add contact
        </Btn>
      </Wrap>

      <ContactList />
    </Section>
  );
}
