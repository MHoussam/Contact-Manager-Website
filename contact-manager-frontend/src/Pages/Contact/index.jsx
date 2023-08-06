import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const [contact, setContact] = useState()
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3000/posts/${id}`).then(response=>setContact(response.data)).catch(e=>console.log(e))
  },[])

  return (
   <div className="test">
    {contact ? 
      <>
        <h1>{contact.first_name}</h1>
        <p>{contact.last_name}</p>
      </>
      : <h2>Contact not found</h2>}
   </div>
  )
}

export default Contact;