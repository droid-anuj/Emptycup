// ContactsCard.js
import React from "react";
import "./ContactsCard.css";
import details from "../Assets/details.svg";
import hide from "../Assets/hide.svg";
import report from "../Assets/report.svg";
import shortlist from "../Assets/shortlist.svg";
import notShortlist from "../Assets/notShortlist.svg";
import Rating from "./Rating";

function ContactsCard({
  data,
  index,
  handleShortlistToggle,
  isShortlistFilterActive,
}) {
  const isToggleDisabled = isShortlistFilterActive;

  const cardStyle = {
    backgroundColor: index % 2 === 0 ? "#FFFCF2" : "white",
  };

  return (
    <div className="card-container" style={cardStyle}>
      <div className="details">
        <div className="name">{data.name}</div>
        <div className="star">
          <Rating value={data.star} maxRating={5} />
        </div>
        <div className="descr">{data.description}</div>
        <div className="profile">
          <div className="project">
            <span className="profile-data">{data.projects}</span>
            <br />
            <div className="datas">Projects</div>
          </div>
          <div className="years">
            <span className="profile-data">{data.experience}</span>
            <br />
            <div className="datas">Years</div>
          </div>
          <div className="price">
            <span className="profile-data">{data.price}</span>
            <br />
            <div className="datas">Price</div>
          </div>
        </div>
        <div>
          {data.phoneNumbers &&
            data.phoneNumbers.map((number, index) => (
              <div className="phoneno" key={index}>
                {number}
              </div>
            ))}
        </div>
      </div>
      <hr className="vertical-line" />
      <div className="contact-action">
        <div className="actions">
          <img src={details} alt="contact icon" />
        </div>
        <div className="actions">
          <img src={hide} alt="contact icon" />
        </div>
        <div
          className="actions"
          onClick={isToggleDisabled ? null : handleShortlistToggle}
        >
          {data.isShortlisted ? (
            <img src={shortlist} alt="contact icon" />
          ) : (
            <img src={notShortlist} alt="contact icon" />
          )}
        </div>
        <div className="actions">
          <img src={report} alt="contact icon" />
        </div>
      </div>
    </div>
  );
}

export default ContactsCard;
