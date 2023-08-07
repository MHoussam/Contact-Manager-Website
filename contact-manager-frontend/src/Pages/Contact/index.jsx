import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  const [contact, setContact] = useState();
  const { id } = useParams();

  const fetchContact = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/displayContacts/${id}`
      );
      setContact(response.data[0][0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="contact-container">
      {contact ? (
        <>
          <div className="header-contact flex">
            <div className="title-contact flex">
              <h1 className="flex contacts-title">
                {contact.first_name} {contact.last_name}
              </h1>
            </div>

            <div className="add-container flex">
              <div className="add center flex">
                <button className="add-btn pointer" onClick={handleButtonClick}>
                  Display Contacts
                </button>
              </div>
            </div>
          </div>

          <div className="contact-info flex">
            <p>
              <span className="bold">Phone Number:</span> +{contact.phone}
            </p>
            <p>
              <span className="bold">Latitude Address:</span>{" "}
              {contact.address_latitude}
            </p>
            <p>
              <span className="bold">Longitude Address:</span>{" "}
              {contact.address_longitude}
            </p>
          </div>

          <MapContainer
            center={[contact.address_latitude, contact.address_longitude]}
            zoom={13}
            scrollWheelZoom={true}
            className="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[contact.address_latitude, contact.address_longitude]}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Contact;
