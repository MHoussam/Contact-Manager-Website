import { useState } from "react";
import axios from "axios";
import "../../styles/styles.css";
import { useNavigate } from "react-router-dom";

const ContactForm = ({setContacts}) =>{
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    address_latitude: "",
    address_longitude: ""
  })

  const handleDataChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = async ()=>{
    try{
      console.log("this is the data: " + data.first_name)
      console.log("this is the data: " + data.last_name)
      console.log("this is the data: " + data.phone)
      const response = await axios.post("http://localhost:8000/api/addContact", data)
      setContacts((contacts)=>[...contacts, response.data])
      setData({first_name: "", last_name: "", phone: "", address_latitude: "", address_longitude: ""})
    }catch(e){
      console.log(e)
    }
  }

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="header flex">
        <div className="title flex">
          <h1 className="flex contacts-title">Add Contact</h1>
        </div>

        <div className="add-container flex">
          <div className="add center flex">
            <button className="add-btn pointer" onClick={handleButtonClick}>Display Contacts</button>
          </div>
        </div>
      </div>
      <div className="contactForm_container">
        <input name="first_name" placeholder="First Name" value={data.first_name} onChange={handleDataChange}/>
        <input name="last_name" placeholder="Last Name" value={data.last_name} onChange={handleDataChange}/>
        <input name="phone" placeholder="Phone Number" type="number" value={data.phone} onChange={handleDataChange}/>
        <input name="address_latitude" type="number" placeholder="Latitude Address" value={data.address_latitude} onChange={handleDataChange}/>
        <input name="address_longitude" type="number" placeholder="Longitude Address" value={data.address_longitude} onChange={handleDataChange}/>
        <button onClick={handleSubmit}>Add</button>
      </div>
  </>
  )
}

export default ContactForm;