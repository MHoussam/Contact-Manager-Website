import axios from "axios";
import ContactForm from "../../Components/ContactForm"
import ContactsList from "../../Components/ContactsList"
import { useEffect, useState } from "react";

const Contacts = ()=>{
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async ()=>{
    const response = await axios.get("http://localhost:8000/api/displayContacts");
    console.log(response.data[0])
    setContacts(response.data[0])
  }

  useEffect(()=>{
    fetchContacts()
  }, [])

  return (
    <div>
      <h1 className="center flex">Contacts</h1>
      <ContactForm setContacts={setContacts}/>
      <ContactsList contacts={contacts}/>
    </div>
  )
}

export default Contacts;