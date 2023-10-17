import React, { useState, useEffect } from "react";
import EventsForm from "./EventsForm";
import EventsTable from "./EventsTable";

const AddEventPage = () => {
  const [editingEvent, setEditingEvent] = useState(null);

  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem("events");
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  // When events change (add or delete), save them to localStorage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleFormSubmit = (data) => {
    if (editingEvent) {
      // Update existing event
      const updatedEvents = events.map((event) =>
        event.id === editingEvent.id ? { ...event, ...data } : event
      );
      setEvents(updatedEvents);
      setEditingEvent(null); // Reset editing event
    } else {
      // Add new event
      const nextId =
        events.length === 0
          ? 1
          : Math.max(...events.map((event) => event.id)) + 1;
      const newEvent = { ...data, id: nextId };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  };

  const handleEditEvent = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    setEditingEvent(eventToEdit);
  };

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <div>
      <EventsForm
        onFormSubmit={handleFormSubmit}
        events={events}
        setEvents={setEvents}
        editingEvent={editingEvent}
      />
      <EventsTable
        events={events}
        onDeleteEvent={handleDeleteEvent}
        onEditEvent={handleEditEvent}
      />
    </div>
  );
};

export default AddEventPage;
