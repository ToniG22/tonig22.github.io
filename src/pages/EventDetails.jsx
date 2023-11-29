import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Spotify } from "react-spotify-embed";
import YouTube from "react-youtube";
import getYoutubeId from "get-youtube-id";
import Gallery from "../components/Gallery";

function EventDetails() {
  const [events, setEvents] = useState([]);
  const [youtubeVideoIds, setYoutubeVideoIds] = useState([]);

  const reloadEvents = () => {
    const storedEvents = localStorage.getItem("events");
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    setEvents(parsedEvents);
  };

  const opts = {
    height: "360",
    width: "600",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    reloadEvents();
  }, []);

  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id, 10));

  useEffect(() => {
    if (event && event.youtube && event.youtube.length > 0) {
      const youtubeIds = event.youtube
        .map((link) => getYoutubeId(link))
        .filter(Boolean);
      setYoutubeVideoIds(youtubeIds);
    }
  }, [event]);

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-details">
      <div className="event-content-container">
        <img src={event.cartazSource} alt={event.title} className="imgEvent" />
        <div className="titleDescription">
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </div>
      </div>
      <div>
        <div className="centered-content">
          <h2 className="maintitles">Local e Data</h2>
          <div>
            <p className="subtitles">
            {event.location}, {event.location2} de {event.beginDate} - {event.endDate}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="centered-content">
          <h2 className="maintitles">Galeria</h2>
          <div>
            <Gallery galleryPath={event.gallery} />
          </div>
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
          <div className="spotifyContainer">
            {event.spotify && event.spotify.length > 0
              ? event.spotify.map((link, index) => (
                  <Spotify className="Spotify" wide key={index} link={link} />
                ))
              : null}
          </div>
        </div>
        <div className="centered-content">
          <h2 className="maintitles">Mais Informação do Evento</h2>
          <div className="YoutubeContainer">
            {youtubeVideoIds.map((videoId, index) => (
              <div className="YoutubeVideo" key={index}>
                <YouTube videoId={videoId} opts={opts} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="event-content-container-link">
        <h3 className="subtitles">
          <strong> Para mais detalhes, visite o site deste evento: </strong>
          </h3>
          <a href={event.siteUrl} className="link">
            <button className="EventLink">Ir ao Site do Evento</button>
          </a>
      </div>
    </div>
  );
}

export default EventDetails;
