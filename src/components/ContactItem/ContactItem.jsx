import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux-items/operations';
import {
  ContactItems,
  ContactName,
  ContactPhone,
  Button,
} from './ContactItem.styled';

function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactItems>
      <ContactName>{contact.name}</ContactName>
      <ContactPhone>{contact.phone}</ContactPhone>
      <Button onClick={handleDelete}>
        Delete
      </Button>
    </ContactItems>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;