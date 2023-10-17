import { useParams } from "react-router-dom";

function EventDetails({ events }) {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id, 10));

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-details">
      <div className="event-content-container">
        <img src={event.img} alt={event.title} style={{ width: "250px" }} />
        <div>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      </div>
      <div class="event-content-container"></div>
      <div className="event-content-container ">
        <p>
          <strong>Freguesia:</strong> {event.location}
        </p>
        <p>
          <strong>Local: </strong>
        </p>
        <p>
          <strong> Data: </strong>
          {event.date}
        </p>{" "}
      </div>
      <div className="event-content-container">
        <h2>Autocarros</h2>
        <table>
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
      <div className="event-content-container"></div>
      VEJAM NA CONSOLA O QUE TEM
      {/* We still need to add more info regarding an event, and think about the page layout */}
      {/* The page layout will be the SAME for all events */}
    </div>
  );
}

export default EventDetails;
