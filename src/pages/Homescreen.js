import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Map from "../components/Map";

const Homescreen = ({ randomCity, setUserGuess, userGuess }) => {
  const [scoreCounter, setScoreCounter] = useState(0);
  const [kmCounter, setKmCounter] = useState(1500);

  return (
    <div className="container mt-5">
      <div className="flex flex-row justify-content-center">
        <h3>{scoreCounter} Cities Placed</h3>
        <h3>{kmCounter} Km Left</h3>
        <h5 className="mt-lg-5">
          {" "}
          Select the location of {randomCity.capitalCity}
        </h5>
      </div>
      <Map setUserGuess={setUserGuess} userGuess={userGuess} />
      <button className="mt-2">Place</button>
    </div>
  );
};

export default Homescreen;
