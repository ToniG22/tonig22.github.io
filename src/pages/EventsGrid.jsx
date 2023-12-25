import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EventsGrid({ events }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="events-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Qual evento?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => navigate(`/${event.type}/${event.id}`)}
          >
            <img
              src={event.img}
              alt={event.title}
              style={{ width: "300px", height: "250px" }}
            />
            <div className="hover-overlay">
              {event.title} - {event.location2} <br />
              Mostrar mais...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsGrid;
