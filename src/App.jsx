import "./App.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Arraiais from "./pages/Arraiais";
import Festivais from "./pages/Festivals";
import Map from "./pages/Map";
import EventDetails from "./pages/EventDetails"

function App() {

  // Initial load of events from localStorage
  const storedEvents = localStorage.getItem('events');
  const [events, setEvents] = useState(storedEvents ? JSON.parse(storedEvents) : []);

  // When events change (add or delete), save them to localStorage
  useEffect(() => {
      localStorage.setItem('events', JSON.stringify(events));
  }, [events]);


  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" index element={<Home />} />
              <Route path="/admin" index element={<Admin />} />
              <Route path="/festivais" index element={<Festivais events={events} />} />
              <Route path="/arraiais" index element={<Arraiais events={events} />} />
              <Route path="/map" index element={<Map />} />
              <Route path="/festivais/:id" index element={<EventDetails events={events} />} />
              <Route path="/arraiais/:id" index element={<EventDetails events={events} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
