import { useNavigate } from "react-router-dom"

const ContactsList = ({contacts})=>{

  const navigate = useNavigate();
  
  const handleNavigate=(id)=>{
    console.log(id)
    navigate(`${id}`)
  }

  return (
    <div>
      <ul>
        {contacts.map((contact, index)=>(<li style={{backgroundColor: "cyan", margin: 10}} key={index} onClick={()=>handleNavigate(contact.id)}>{contact.first_name}</li>))}
      </ul>
    </div>
  )
}

export default ContactsList;