import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

  const today = new Date(); // Get today's date
  const startOfWeek = new Date(today);
  const endOfWeek = new Date(today);

  startOfWeek.setDate(startOfWeek.getDate() - 1);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  console.log("start: ", startOfWeek);
  console.log("end: ", endOfWeek);

  // Filter events for the entire week
  const weeklyEvents = events.filter((event) => {
    const eventDate = new Date(event.dates[0]); // Assuming event.dates[0] is in "YYYY-MM-DD" format
    // Compare the event date against the entire week
    return eventDate >= startOfWeek && eventDate <= endOfWeek;
  });
  

  return (
    <div>
      <header>
        <h1>
          <div className='Home-Float'> 
            <p className='H1-home'>MELHORES EVENTOS</p>
            <p className='H1-home'>CULTURAIS NA ILHA DA</p>
          </div>
          <div className='H1-madeira'> 
            MADEIRA
          </div>
        </h1>
      </header>

      <main>
        <section>
            <div className='H2-block'>
            <h2 className='H2-home'>Destaques</h2>
            <EventsGrid events={weeklyEvents} />
            </div>
        </section>

        <section>
          <div>
          <NavLink to="festivais"><button className='Button-home' ><b>Festivais</b></button></NavLink>
          </div>
          <div>
            <p className='Home-Box'>
              Festivais são eventos culturais que abrangem uma ampla gama de temas, como música, arte,
              comida, religião e muito mais. Eles podem variar em duração, desde festivais de um dia 
              até eventos que duram semanas. Os festivais atraem públicos diversificados e oferecem uma
              variedade de atividades culturais e artísticas, tornando-se celebrações de grande alcance
              e importância cultural.
            </p>
          </div>
          <div>
            <NavLink to="arraiais"><button className='Button-home'><b>Arraiais</b></button></NavLink>
          </div>
          <div>
            <p className='Home-Box'>
              Arraiais são festas tradicionais. Estas celebrações são marcadas por danças folclóricas 
              e comidas típicas da zona. Geralmente realizados em áreas rurais, os arraiais são festas
              curtas que unem devoção religiosa e cultura popular, proporcionando momentos de alegria 
              para as comunidades locais.
            </p>
          </div>
          <div>
            <NavLink to="mapa"><button className='Button-home'><b>Mapa</b></button></NavLink>
          </div>
          <div>
            <p className='Home-Box'>
              Aqui poderá ver os eventos que estão a decorrer na ilha da Madeira, seja arraiais ou festivais. 
              Poderá encontrar os eventos que estão a decorrer na freguesia que escolheu.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};


export default Home;
