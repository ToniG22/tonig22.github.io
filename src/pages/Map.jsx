import React, { useState, useEffect } from "react";
import EventsGrid from "./EventsGrid";
import { CiLocationOn } from "react-icons/ci";

const Map = () => {

  const [events, setEvents] = useState([]);

  const reloadEvents = () => {
    const storedEvents = localStorage.getItem("events");
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    setEvents(parsedEvents);
  };

  useEffect(() => {
    reloadEvents();
  }, []);

  const localidades = {
    location1: {
      name: "Funchal",
      top: "541px",
      left: "731px",
    },
    location2: {
      name: "Ribeira Brava",
      top: "457px",
      left: "389px",
    },
    location3: {
      name: "Santa Cruz",
      top: "501px",
      left: "954px",
    },
    location4: {
      name: "Câmara de Lobos",
      top: "506px",
      left: "565px",
    },
    location5: {
      name: "Calheta",
      top: "259px",
      left: "67px",
    },
    location6: {
      name: "Machico",
      top: "334px",
      left: "1084px",
    },
    location7: {
      name: "Santana",
      top: "164px",
      left: "787px",
    },
    location8: {
      name: "São Vicente",
      top: "200px",
      left: "473px",
    },
    location9: {
      name: "Porto Moniz",
      top: "62px",
      left: "102px",
    },
    location10: {
      name: "Ponta do Sol",
      top: "365px",
      left: "233px",
    },
    // ... add other locations as needed
  };

  var [selectedLocation, setSelectedLocation] = useState("");

  const locationEventsFestivais = events.filter(
    (event) => event.location === selectedLocation && event.type === "festivais"
  );

  const locationEventsArraiais = events.filter(
    (event) => event.location === selectedLocation && event.type === "arraiais"
  );

  return (
    <div>
      {!selectedLocation && (
        <div>
          <h1 className="title">Escolha a freguesia:</h1>
          <div className="mapPos">
            {Object.values(localidades).map((location, index) => (
              <div
                className="mapNeedle"
                style={{
                  position: "absolute",
                  top: location.top,
                  left: location.left,
                }}
                key={index}
              >
                <button
                  onClick={() => setSelectedLocation(location.name)}
                  className={`locationButton ${
                    selectedLocation === location.name ? "active" : ""
                  }`}
                >
                  {location.name}
                </button>
                <CiLocationOn
                  size={75}
                  className={`ciLocationOn ${
                    selectedLocation === location.name ? "hidden" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedLocation && (
        <div>
          <h1>Festivais</h1>
          {locationEventsFestivais.length > 0 ? (
            <EventsGrid events={locationEventsFestivais} />
          ) : (
            <p>
              Não existem festivais a ocorrer na localidade: {selectedLocation}.
            </p>
          )}
          <h1>Arraiais</h1>
          {locationEventsArraiais.length > 0 ? (
            <EventsGrid events={locationEventsArraiais} />
          ) : (
            <p>
              Não existem arraiais a ocorrer na localidade: {selectedLocation}.
            </p>
          )}
          <button onClick={() => setSelectedLocation("")}>
            Voltar ao mapa
          </button>
        </div>
      )}
    </div>
  );
};

export default Map;
