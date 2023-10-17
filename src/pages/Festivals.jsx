import React from 'react';
import EventsGrid from './EventsGrid';

const Festivais = ({ events }) => {
  // Filter events of type "festivais"
  const festivaisEvents = events.filter(event => event.type === 'festivais');

  return (
    <div>
      <h1>Festivais</h1>
      <EventsGrid events={festivaisEvents} />
    </div>
  );
}

export default Festivais;
