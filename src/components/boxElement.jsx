import React from "react";

const BoxElement = ({ eventImage, eventName, eventLocation }) => {
  return (
    <div className="event-card">
      <div className="event-card-img">
        <img src={eventImage} alt="Event" />
        <div className="event-card-text">
          <h3>{eventName}</h3>
          <p>{eventLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default BoxElement;
