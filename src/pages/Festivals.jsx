import React, { useState, useEffect } from "react";
import EventsGrid from "./EventsGrid";

const Festivais = () => {
  const [events, setEvents] = useState([]);

  const reloadEvents = () => {
    const storedEvents = localStorage.getItem("events");
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    setEvents(parsedEvents);
  };

  useEffect(() => {
    reloadEvents();
  }, []);

  // Filter events of type "festivais"
  const festivaisEvents = events.filter((event) => event.type === "festivais");

  return (
    <div>
      <h1>Festivais</h1>
      <EventsGrid events={festivaisEvents} />
    </div>
  );
};

export default Festivais;
