import React from 'react';

const EventsTable = ({ events, onDeleteEvent }) => {
    return (
        <div className='tableContainer'>
        <table border="1">
            <thead>
                <tr>
                    {["Id", "Title", "Description", "RODESTE Transport", "GIRO Transport", "SAM Transport", "Location", "Img. Source", "Type of Event", "Event Date", "Spotify 1", "Spotify 2", "Spotify 3", "Gallery", "Cartaz Source", "Actions"].map(header => (
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
                        <td>{event.transports.rodeste}</td>
                        <td>{event.transports.giro}</td>
                        <td>{event.transports.SAM}</td>
                        <td>{event.location}</td>
                        <td>{event.img}</td>
                        <td>{event.type}</td>
                        <td>{event.date}</td>
                        <td>{event.spotify.spotify1}</td>
                        <td>{event.spotify.spotify2}</td>
                        <td>{event.spotify.spotify3}</td>
                        <td>{event.gallery}</td>
                        <td>{event.cartazSource}</td>
                        <td><button onClick={() => onDeleteEvent(event.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default EventsTable;
