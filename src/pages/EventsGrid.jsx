import React from "react";
import { useNavigate } from "react-router-dom";

function EventsGrid({ events }) {
  const navigate = useNavigate();

  return (
    <div className="events-container">
      <div className="events-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card"
            // Use the event type in the link to determine the route "festivals/" or "arraiais/"
            onClick={() => navigate(`/${event.type}/${event.id}`)}
          >
            <img src={event.img} alt={event.title} />
            <div className="hover-overlay">
              {event.title} - {event.location} <br></br>
              Mostrar mais...
              {/* Maybe we'll need to put this in Portuguese 🩻 */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsGrid;
