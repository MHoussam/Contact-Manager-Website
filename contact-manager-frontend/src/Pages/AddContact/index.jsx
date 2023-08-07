import React from "react";
import ContactForm from "../../Components/ContactForm";
import "../../styles/contacts.css";
import { useState } from "react";

const AddContact = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <ContactForm setContacts={setContacts} />
    </div>
  );
};

export default AddContact;
