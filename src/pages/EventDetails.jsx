import { useParams } from "react-router-dom";

function EventDetails({ events }) {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id, 10));

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-details">
      <img src={event.img} alt={event.title} />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.location}</p>
      <p>{event.date}</p>
      VEJAM NA CONSOLA O QUE TEM
      {/* We still need to add more info regarding an event, and think about the page layout */}
      {/* The page layout will be the SAME for all events */}
    </div>
  );
}

export default EventDetails;
