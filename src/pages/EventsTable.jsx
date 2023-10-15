import React from 'react';

const EventsTable = ({ events, onDeleteEvent }) => {
    return (
        <table border="1">
            <thead>
                <tr>
                    {["Id", "Title", "Description", "Transports", "Location", "Img. Source", "Type of Event", "Actions"].map(header => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {events.map(event => (
                    <tr key={event.id}>
                        <td>{event.id}</td>
                        <td>{event.title}</td>
                        <td>{event.description}</td>
                        <td>{event.transports}</td>
                        <td>{event.location}</td>
                        <td>{event.img}</td>
                        <td>{event.type}</td>
                        <td><button onClick={() => onDeleteEvent(event.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EventsTable;
