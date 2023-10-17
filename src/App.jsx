import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Arraiais from "./pages/Arraiais";
import Festivais from "./pages/Festivals";
import Map from "./pages/Map";
import EventDetails from "./pages/EventDetails";
import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" index element={<Home />} />
              <Route path="/admin" index element={<Admin />} />
              <Route
                path="/festivais"
                index
                element={<Festivais />}
              />
              <Route
                path="/arraiais"
                index
                element={<Arraiais />}
              />
              <Route path="/mapa" index element={<Map />} />
              <Route
                path="/festivais/:id"
                index
                element={<EventDetails />}
              />
              <Route
                path="/arraiais/:id"
                index
                element={<EventDetails />}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
