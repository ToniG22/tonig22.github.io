import React, { useState, useEffect } from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import EventsGrid from "./EventsGrid";

const Home = () => {
  const [events, setEvents] = useState([]);

  const reloadEvents = () => {
    const storedEvents = localStorage.getItem("events");
    const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
    setEvents(parsedEvents);
  };

  useEffect(() => {
    reloadEvents();
  }, []);

  console.log(events);

  const today = new Date(); // Get today's date
  const startOfWeek = new Date(today);
  const endOfWeek = new Date(today);

  startOfWeek.setDate(startOfWeek.getDate() - 1);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  //console.log("start: ", startOfWeek);
  //console.log("end: ", endOfWeek);

  // Filter events for the entire week
  const weeklyEvents = events.filter((event) => {
    const eventDate = new Date(event.endDate); // Assuming event.dates[0] is in "YYYY-MM-DD" format
    // Compare the event date against the entire week
    return (eventDate >= startOfWeek && eventDate <= endOfWeek) || {};
  });

  return (
    <div>
      <header>
        <h1>
          <div className="H1-home">
            <div>
              <div>Melhores eventos</div>
              <div className="MiddleH1Home">culturais na ilha da</div>
              <div className="H1-madeira"> Madeira </div>
            </div>
            <NavLink to="/mapa" className="link-imagen">
              <img src="/madeiraMapa.png" alt="Mapa de Madeira" />
              <span className="texto-hover">
                Veja os eventos na sua localidade!
              </span>
            </NavLink>
          </div>
        </h1>
      </header>

      <main>
        <section>
          <div className="H2-block">
            <h2 className="H2-home">Destaques</h2>
            <EventsGrid events={weeklyEvents} />
          </div>
        </section>

        <section>
          <div className="HomeDescription">
            <NavLink to="festivais">
              <button className="Button-home">
                <b>Festivais</b>
              </button>
            </NavLink>
            <p className="Home-Box">
              Festivais são eventos culturais que abrangem uma ampla gama de
              temas, como música, arte, comida, religião e muito mais. Eles
              podem variar em duração, desde festivais de um dia até eventos que
              duram semanas.
            </p>
          </div>

          <div className="HomeDescription">
            <NavLink to="arraiais">
              <button className="Button-home">
                <b>Arraiais</b>
              </button>
            </NavLink>
            <p className="Home-Box">
              Arraiais são festas tradicionais. Estas celebrações são marcadas
              por danças folclóricas e comidas típicas da zona. Estes são
              considerados festas curtas que unem devoção religiosa e cultura
              popular, proporcionando momentos de alegria para as comunidades
              locais.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
