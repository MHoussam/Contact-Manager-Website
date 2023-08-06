import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const [contact, setContact] = useState()
  const {id} = useParams()

  const fetchContact = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/displayContacts/${id}`);
      console.log('contact:', response.data[0][0]);
      setContact(response.data[0][0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchContact()
  }, [])


  return (
   <div className="test">
    {contact ? 
      <>
        <h1>{contact.first_name}</h1>
        <p>{contact.last_name}</p>
      </>
      : <h2>Contact not found</h2>
    }
   </div>
  )
}

export default Contact;