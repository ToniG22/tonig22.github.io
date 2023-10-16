import React, { useState } from "react";
import EventsGrid from "./EventsGrid";

const Map = ({ events }) => {
  const localidades = [
    "Funchal",
    "Câmara de Lobos",
    "Ribeira Brava",
    "Caniço",
    "Machico",
    "Calheta",
    "Curral das Freiras",
    "Porto Moniz",
    "São Vicente",
    "Santana",
  ];

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
          <h1>Mapa</h1>
          {localidades.map((location, index) => (
            <button
              key={index}
              onClick={() => setSelectedLocation(location)}
              className={selectedLocation === location ? "active" : ""}
            >
              {location}
            </button>
          ))}
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
