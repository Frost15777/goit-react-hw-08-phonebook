import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
} from 'redux-items/selectors';
import { fetchContacts } from 'redux-items/operations';
import ContactItem from '../ContactItem/ContactItem';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.length === 0 && !error && (
        <p>The Phonebook is empty. Add your first contact.</p>
      )}
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} contact={{ id, name, phone }} />
      ))}
    </ul>
  );
}

export default ContactList;