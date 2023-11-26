import React, { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "../Assets/Logo.svg";
import menu from "../Assets/Menu-icon.png";
import contacts from "../Assets/contacts.png";
import gallery from "../Assets/gallery.png";
import map from "../Assets/Map.png";
import Notshortlisted from "../Assets/shortlisted.png";
import sort from "../Assets/Sort.png";
import ContactsCard from "./ContactsCard";
import Shortlisted from "../Assets/shortlisted-1.png";


function HomePage() {
  
  const [contactData, setContactData] = useState(null);
  const [isShortlistFilterActive, setIsShortlistFilterActive] = useState(false);

  const fetchContactData = async () => {
    try {
      const response = await fetch(
        `https://emptycup-iota.vercel.app/api/contacts`
      );
      const data = await response.json();
      console.log(data);
      setContactData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShortlistToggle = (index) => {
    setContactData((prevData) => {
      const newData = [...prevData];
      newData[index] = {
        ...newData[index],
        isShortlisted: !newData[index].isShortlisted,
      };
      return newData;
    });
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  if (contactData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <header>
        <div className="top-title">
          <img className="logo" src={logo} alt="EmptyCup logo" />
          <h3 className="heading">EmptyCup</h3>
          <div className="menu-icon">
            <img src={menu} alt="Menu Icon" />
          </div>
        </div>
        <hr className="break-line" />
        <div className="menu-bar">
          <div className="Contacts">
            <img src={contacts} alt="contact icon" />
            Contacts
          </div>
          <div className="gallery">
            <img src={gallery} alt="gallery icon" />
            Gallery
          </div>
          <div className="map">
            <img src={map} alt="map icon" />
            map
          </div>
          <div
            className={`shortlisted ${isShortlistFilterActive ? "active" : ""}`}
            onClick={() =>
              setIsShortlistFilterActive((prevState) => !prevState)
            }
          >
            {isShortlistFilterActive ? (
              <img src={Shortlisted} alt="shortlisted icon" />
            ) : (
              <img src={Notshortlisted} alt="shortlisted icon" />
            )}
            shortlisted
          </div>

          <div className="sort">
            <img src={sort} alt="sort icon" />
            Sort
          </div>
        </div>
      </header>

      <main>
        {contactData
          .filter(
            (contact) => !isShortlistFilterActive || contact.isShortlisted
          )
          .map((contact, index) => (
            <ContactsCard
              key={index}
              data={contact}
              index={index}
              handleShortlistToggle={() => handleShortlistToggle(index)}
              isShortlistFilterActive={isShortlistFilterActive}
            />
          ))}
      </main>
    </div>
  );
}

export default HomePage;
