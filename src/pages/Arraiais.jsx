import React, { useState, useEffect } from 'react';
import EventsGrid from "./EventsGrid";

const Arraiais = () => {
  // Filter events of type "arraiais"

  const [events, setEvents] = useState([]);

  const reloadEvents = () => {
    const storedEvents = localStorage.getItem("events");
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    setEvents(parsedEvents);
  };

  useEffect(() => {
    reloadEvents();
  }, []);



  const arraiaisEvents = events.filter((event) => event.type === "arraiais");

  return (
    <div>
      <h1>Arraiais</h1>
      {arraiaisEvents.length === 0 ? (
        <p>Não existem arraiais disponíveis de momento!</p>
      ) : (
        <EventsGrid events={festivaisEvents} />
      )}
    </div>
  );
};

export default Arraiais;
