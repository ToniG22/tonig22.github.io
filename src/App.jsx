import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Arraiais from "./pages/Arraiais";
import Festivais from "./pages/Festivals";
import Map from "./pages/Map";
import EventDetails from "./pages/EventDetails";
import { useEffect } from "react";
import backgroundImage from '../public/BackgroundSGM.jpg'
import "./App.css";

function App() {

  useEffect(() => {
    // Check if 'events' data is already in local storage
    if (!localStorage.getItem('events')) {
      console.log("Loading Events...")
      const eventsData = [
        {
          "id": 2,
          "title": "Noites do Mercado",
          "description": "O destaque é para a noite do Mercado dos Lavradores, no Funchal, que acontece sempre no dia 23 de dezembro, onde pessoas de toda a ilha vêm até à capital fazer as suas compras de Natal, no mercado e nas barracas à volta, que vendem frutas, legumes, searas, azevinhos, entre tantas outras coisas alusivas ao Natal da nossa ilha.",
          "transports": {
            "rodeste": "7, 80, 107, 139, 142",
            "giro": "N/a",
            "SAM": "113, 23"
          },
          "location": "Funchal",
          "location2": "Centro",
          "img": "/images/NDMPoster.jpg",
          "type": "arraiais",
          "beginDate": "2023-12-09",
          "endDate": "2023-12-23",
          "spotify": ["https://open.spotify.com/playlist/19HTG79zPYf24d0dPGzxCH?si=9b4945f3ca494bfa"],
          "youtube": ["https://www.youtube.com/watch?v=-AZgomQePCA"],
          "gallery": "/images/gallery/NDM",
          "cartazSource": "/images/NDMPoster.jpg",
          "siteUrl": "https://eventsmadeira.com/evento/noites-do-mercado/"
        },
        {
          "id": 3,
          "title": "Festa do Panelo",
          "description": "Esta iniciativa de cariz popular realiza-se no Chão da Ribeira, logo pela manhã no primeiro domingo após a realização das Festas de Santo Antão, altura em que as famílias se reúnem para preparar e degustar o “panelo”, um prato confecionado à base de legumes e enchidos, muito semelhante ao Cozido à Portuguesa.",
          "transports": {
            "rodeste": "6, 80, 139",
            "giro": "N/a",
            "SAM": "N/a"
          },
          "location": "Porto Moniz",
          "location2": "Chão da Ribeira",
          "img": "/images/FDPPoster.jpg",
          "type": "arraiais",
          "beginDate": "2024-01-27",
          "endDate": "2024-01-28",
          "spotify": ["https://open.spotify.com/playlist/19HTG79zPYf24d0dPGzxCH?si=9b4945f3ca494bfa"],
          "youtube": ["https://www.youtube.com/watch?v=s95WArmluWQ"],
          "gallery": "/images/gallery/FDP",
          "cartazSource": "/images/FDPPoster.jpg",
          "siteUrl": "https://eventsmadeira.com/evento/festa-do-panelo/"
        },
        {
          "id": 4,
          "title": "São Pedro",
          "description": "Padroeiro dos pescadores, o São Pedro tem sido, ao longo de vários séculos, um dos santos populares mais celebrados na freguesia de Câmara de Lobos, ocorrendo ali, desde tempos imemoriais, a 29 de junho, uma grande festividade em sua honra, festividade esta que, no decurso das últimas décadas, tem-se constituído como a mais importante festa de natureza popular e religiosa realizada no concelho.",
          "transports": {
            "rodeste": "27, 96, 137",
            "giro": "N/a",
            "SAM": "N/a"
          },
          "location": "Câmara de Lobos",
          "location2": "Centro",
          "img": "/images/SPPoster.jpg",
          "type": "arraiais",
          "beginDate": "2023-06-28",
          "endDate": "2023-07-02",
          "spotify": [
            "https://open.spotify.com/artist/4RPhwXdkeoT1IYQ1sQIEvi?si=l2oUxvh2RiOmUL-ZfkeqcQ",
            "https://open.spotify.com/artist/3Cpjz5dY9HNR41QuMn3oYC?si=B7XhbUCwQt-dxKSIu3MmmA"
          ],
          "youtube": ["https://www.youtube.com/watch?v=B_6Xlwme8c8"],
          "gallery": "/images/gallery/SP",
          "cartazSource": "/images/SPPoster.jpg",
          "siteUrl": "https://eventsmadeira.com/evento/festas-de-sao-pedro-2/"
        }
        // ... other events
      ];

      // Store the events data in local storage
      localStorage.setItem('events', JSON.stringify(eventsData));
    }
  }, []);

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
