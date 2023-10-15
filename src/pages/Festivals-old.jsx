import React from "react";
import { Spotify } from "react-spotify-embed";
import BoxElement from "../components/boxElement";

const Festivals = () => {
  // Define dynamic values for the event image, name, and location

  return (
    <>
    <Spotify link="https://open.spotify.com/track/1Jk03rMQGTjdkjNtCGgkPd?si=8c74bf53339944af" />
    <div className="container">
      <div className="grid-container">
        <BoxElement
          eventImage="/summeropening.jpg"
          eventName="Summer Opening"
          eventLocation="Parque de Santa Catarina"
        />
        <BoxElement
          eventImage="/meosonsdomar.jpg"
          eventName="Meo Sons do Mar"
          eventLocation="Parque de Santa Catarina"
        />
        <BoxElement
          eventImage="/summeropening.jpg"
          eventName="Summer Opening"
          eventLocation="Parque de Santa Catarina"
        />
        <BoxElement
          eventImage="/meosonsdomar.jpg"
          eventName="Meo Sons do Mar"
          eventLocation="Parque de Santa Catarina"
        />
        <BoxElement
          eventImage="/summeropening.jpg"
          eventName="Summer Opening"
          eventLocation="Parque de Santa Catarina"
        />
        <BoxElement
          eventImage="/meosonsdomar.jpg"
          eventName="Meo Sons do Mar"
          eventLocation="Parque de Santa Catarina"
        />
        <BoxElement
          eventImage="/summeropening.jpg"
          eventName="Summer Opening"
          eventLocation="Parque de Santa Catarina"
        />
        <BoxElement
          eventImage="/meosonsdomar.jpg"
          eventName="Meo Sons do Mar"
          eventLocation="Parque de Santa Catarina"
        />
        <BoxElement
          eventImage="/summeropening.jpg"
          eventName="Summer Opening"
          eventLocation="Parque de Santa Catarina"
        />
        <BoxElement
          eventImage="/meosonsdomar.jpg"
          eventName="Meo Sons do Mar"
          eventLocation="Parque de Santa Catarina"
        />
      </div>
    </div>
    </>
  );
};

export default Festivals;
