import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Empty } from 'antd';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux-items/selectors';
import { Loader } from '../Loader/Loader';
import { fetchContacts } from 'redux-items/operations';
import ContactItem from '../ContactItem/ContactItem';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error ? (
        <Loader />
      ) : filteredContacts.length === 0 && !error ? (
        <Empty />
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </ul>
  );
}

export default ContactList;
