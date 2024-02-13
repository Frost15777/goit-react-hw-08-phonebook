import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux-items/operations';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux-items/selectors';
import { Form, Input, Text, Button } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: name,
      phone: phone,
    };

    const isContactExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContactExist) {
      Notiflix.Report.warning(
        'Alert',
        `Contact with name ${contact.name} already exists!`,
        'Ok'
      );
      return;
    }

    const isPhoneExist = contacts.find(
      ({ phone }) =>
        contact.phone.replace(/\D/g, '') === phone.replace(/\D/g, '')
    );

    if (isPhoneExist) {
      Notiflix.Report.warning(
        'Alert',
        `Number ${contact.phone} is already in contacts!`,
        'Ok'
      );
      return;
    }

    dispatch(addContact(contact));
    setName('');
    setPhone('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Name</Text>
      <Input
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleNameChange}
      />

      <Text>Number</Text>
      <Input
        type="tel"
        name="phone"
        placeholder="Enter phone number"
        value={phone}
        onChange={handlePhoneChange}

      />

      <Button type="submit">
        Add Contact
      </Button>
    </Form>
  );
};

export default ContactForm;