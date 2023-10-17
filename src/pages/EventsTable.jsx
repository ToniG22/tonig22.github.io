import React from "react";

const EventsTable = ({ events, onDeleteEvent, onEditEvent }) => {
  return (
    <div className="tableContainer">
      <table border="1">
        <thead>
          <tr>
            {[
              "Id",
              "Title",
              "Description",
              "Type of Event",
              "Event Dates",
              "Location",
              "Transports",
              "Spotify",
              "Img. Source",
              "Gallery",
              "Cartaz Source",
              "Actions",
            ].map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.type}</td>
              <td>{event.date} - {event.date2}</td>
              <td>{event.location} - {event.location2}</td>
              <td>Rodoeste: {event.transports && event.transports.rodeste} <br/> Giro: {event.transports && event.transports.giro} <br/> Sam: {event.transports && event.transports.SAM}</td>
              <td>Spotify1: {event.spotify && event.spotify.spotify1} <br/> Spotify2: {event.spotify && event.spotify.spotify2} <br/> Spotify3: {event.spotify && event.spotify.spotify3} </td>
              <td>{event.img}</td>
              <td>{event.gallery}</td>
              <td>{event.cartazSource}</td>
              <td>
                <button onClick={() => onEditEvent(event.id)}>Edit</button>
                <button onClick={() => onDeleteEvent(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
