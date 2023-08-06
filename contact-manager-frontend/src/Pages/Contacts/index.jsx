import axios from "axios";
import ContactForm from "../../Components/ContactForm"
import ContactsList from "../../Components/ContactsList"
import "../../styles/contacts.css";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/addContact");
  };

  return (
    <div>
      <div className="header flex">
        <div className="title flex">
          <h1 className="flex contacts-title">Contacts</h1>
        </div>

        <div className="add-container flex">
          <div className="add center flex">
            <button className="add-btn pointer" onClick={handleButtonClick}>Add Contact</button>
          </div>
        </div>
      </div>
      {/* <ContactForm setContacts={setContacts}/> */}
      <ContactsList contacts={contacts}/>
    </div>
  )
}

export default Contacts;