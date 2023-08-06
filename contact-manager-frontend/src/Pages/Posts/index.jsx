import axios from "axios";
import ContactForm from "../../Components/ContactForm"
import ContactsList from "../../Components/ContactsList"
import { useEffect, useState } from "react";

const Contacts = ()=>{
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async ()=>{
    const response = await axios.get("http://localhost:3000/posts");
    console.log(response.data)
    setContacts(response.data)
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