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
            <button className="add-btn pointer bold" onClick={handleButtonClick}>Display Contacts</button>
          </div>
        </div>
      </div>

      <div className="addForm flex center">
        <div className="contactForm_container flex column">
          <div className="names flex">
            <div className="fname flex column width-50">
              <label for="first_name"><span className="bold">First Name:</span></label>
              <input name="first_name" className="first_name padding" placeholder="First Name" value={data.first_name} onChange={handleDataChange}/>
            </div>
            <div className="lname flex column width-50">
              <label for="last_name"><span className="bold">Last Name:</span></label>
              <input name="last_name" className="padding" placeholder="Last Name padding" value={data.last_name} onChange={handleDataChange}/>
            </div>
          </div>
          <div className="numbers flex">
            <div className="phone flex column width-33">
            <label for="phone"><span className="bold">Phone Number:</span></label>
              <input name="phone" className="padding" placeholder="Phone Number" type="number" value={data.phone} onChange={handleDataChange}/>
            </div>
            <div className="lat flex column width-33">
            <label for="address_latitude"><span className="bold">Latitude Address:</span></label>
              <input name="address_latitude" className="padding" type="number" placeholder="Latitude Address" value={data.address_latitude} onChange={handleDataChange}/>
            </div>
            <div className="long flex column width-33">
            <label for="address_longitude"><span className="bold">Longitude Address:</span></label>
              <input name="address_longitude" className="padding" type="number" placeholder="Longitude Address" value={data.address_longitude} onChange={handleDataChange}/>
            </div>
          </div>
          <div className="btn">
            <div className="flex center">
              <button className="add-contact-btn bold pointer" onClick={handleSubmit}>Add</button>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default ContactForm;