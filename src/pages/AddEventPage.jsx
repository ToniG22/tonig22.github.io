import React, { useState, useEffect } from 'react';
import EventsForm from './EventsForm'
import EventsTable from './EventsTable';

const AddEventPage = () => {
    const [events, setEvents] = useState(() => {
        const storedEvents = localStorage.getItem('events');
        return storedEvents ? JSON.parse(storedEvents) : [];
    });

    const handleFormSubmit = (data) => {
        // IDs for events are attributed automatically, this just ensures that there are no duplicate IDs
        const nextId = events.length === 0 ? 1 : Math.max(...events.map(event => event.id)) + 1;

        const newEvent = { ...data, id: nextId };

        setEvents(prevEvents => [...prevEvents, newEvent]);
    };

    const handleDeleteEvent = (id) => {
        const updatedEvents = events.filter(event => event.id !== id);
        setEvents(updatedEvents);
    };

    // When events change (add or delete), save them to localStorage
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    return (
        <div>
            <EventsForm onFormSubmit={handleFormSubmit} events={events} setEvents={setEvents} />
            <EventsTable events={events} onDeleteEvent={handleDeleteEvent} />
        </div>
    );
};

export default AddEventPage;
