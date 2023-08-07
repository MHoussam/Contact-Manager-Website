import { useNavigate } from "react-router-dom";
import "../../styles/list.css";
import cardPic from '../../assets/images/contact.png';

const ContactsList = ({contacts})=>{

  const navigate = useNavigate();
  
  const handleNavigate=(id)=>{
    navigate(`${id}`)
  }

  return (
    <div className="cards flex wrap">
        {contacts.map((contact, index) => (
          <div className="card pointer"
            key={index}
            onClick={() => handleNavigate(contact.id)}
          >
            <img src={cardPic} alt="Avatar" className="card-pic" />
            <div className="container flex center bold">
              {contact.first_name} {contact.last_name}
            </div>
          </div>
        ))}
    </div>
  )
}

export default ContactsList;