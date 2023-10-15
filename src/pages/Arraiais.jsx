import React from 'react';
import EventsGrid from './EventsGrid';

const Arraiais = ({ events }) => {
  // Filter events of type "arraiais"
  const arraiaisEvents = events.filter(event => event.type === 'arraiais');

  console.log(arraiaisEvents);

  return (
    <div>
      <h1>Arraiais</h1>
      <EventsGrid events={arraiaisEvents} />
    </div>
  );
}

export default Arraiais;
