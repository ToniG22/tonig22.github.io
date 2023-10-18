import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Spotify } from "react-spotify-embed";

function EventDetails() {
  const [events, setEvents] = useState([]);

  const reloadEvents = () => {
    const storedEvents = localStorage.getItem("events");
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    setEvents(parsedEvents);
  };

  useEffect(() => {
    reloadEvents();
  }, []);

  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id, 10));

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-details">
      <div className="event-content-container">
        <img src={event.img} alt={event.title} className="imgEvent" />
        <div className="titleDescription">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      </div>
      <div>
        <div className="centered-content">
          <h2 className="maintitles">Local e Data</h2>
          <div>
            <h2 className="subtitles">
              {event.location}, {event.location2} a {event.beginDate}
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div className="centered-content">
          <h2 className="maintitles">Galeria</h2>
          <div>---</div>
        </div>
      </div>
      <div>
        <div className="centered-content">
          <h2 className="maintitles">Autocarros</h2>
          <table className="tableEvent">
            <thead>
              <tr>
                <th>Horários do Funchal</th>
                <th>Rodoeste</th>
                <th>SAM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{event.transports.giro}</td>
                <td>{event.transports.rodeste}</td>
                <td>{event.transports.SAM}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="centered-content">
          <h2 className="maintitles">Música que poderá ouvir no festival</h2>
          <div>
            {event.spotify && event.spotify.length > 0
              ? event.spotify
                  .filter((link) => link !== "")
                  .map((link, index) => <Spotify key={index} link={link} />)
              : null}
          </div>
        </div>
      </div>
      <div className="event-content-container">
        <h2 className="subtitles">
          <strong> Para mais detalhes, visite o site deste evento: </strong>
          <a href="https://summeropening.pt/" className="link">
            https://summeropening.pt/
          </a>
          .
        </h2>
      </div>
    </div>
  );
}

export default EventDetails;
