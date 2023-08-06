import React from 'react';
import axios from "axios";
import ContactForm from "../../Components/ContactForm";
import ContactsList from "../../Components/ContactsList";
import "../../styles/contacts.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AddContact = () => {
    const [contacts, setContacts] = useState([]);
    
    return (
        <div>
          <ContactForm setContacts={setContacts}/>
        </div>
      )
}

export default AddContact;