import {
  ItemLi,
  Name,
  Number,
  Btn,
  WrapText,
  WrapBtn,
} from 'components/ContactItem/ContactItem.styled';
import { Title } from 'pages/Contacts/Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { EditForm } from 'components/EditContact/EditForm';


export const Item = ({ contact: { name, id, number } }) => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading);
  
  const onToggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <>
      <ItemLi>
        <WrapText>
          <Name>{name}</Name>
          <Number>{number}</Number>
        </WrapText>

        <WrapBtn>
          <Btn type="button" onClick={onToggleModal} disabled={isLoading}>
            Edit
          </Btn>
          <Btn type="button" onClick={handleDelete} disabled={isLoading}>
            Delete
          </Btn>
        </WrapBtn>
      </ItemLi>
      {showModal && (
        <Modal onToggle={onToggleModal}>
          <Title>Editing contact</Title>
          <EditForm
            name={name}
            id={id}
            number={number}
            onToggle={onToggleModal}
          />
        </Modal>
      )}
    </>
  );
};

