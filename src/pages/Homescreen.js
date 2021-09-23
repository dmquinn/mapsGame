import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import { capitalCities } from "../data/cities.json";
import haversineDistance from "../utils/haversineDistance";

const defaultValue = { lat: 0, lng: 0 };

//GameState: play , check , win , lose

const Homescreen = ({ randomCity, setUserGuess, userGuess }) => {
  const [gameState, setGameState] = useState("play");
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [distance, setDistance] = useState(0);
  const [userCoords, setUserCoords] = useState(defaultValue);

  const [userScoreCounter, setUserScore] = useState(0);
  const [kmCounter, setKmCounter] = useState(1500);

  const selectedCity = capitalCities?.[selectedCityIndex];
  const isDisabled = userCoords["lat"] === 0 && userCoords["lng"] === 0;

  const handleCheck = (lat, lng) => {
    setGameState("check");

    const distance = haversineDistance(
      selectedCity.lat,
      selectedCity.long,
      userCoords.lat,
      userCoords.lng
    );

    setDistance(distance);

    if (distance < 50) {
      setUserScore(userScoreCounter + 1);
    } else {
      if (kmCounter - distance < 0) {
        setKmCounter(0);
      } else {
        setKmCounter(kmCounter - distance);
      }
    }

    if (selectedCityIndex === capitalCities.length - 1) {
      setGameState("win");
    }
  };

  const handleNextCity = () => {
    setGameState("play");
    setUserCoords(defaultValue);
    setSelectedCityIndex(selectedCityIndex + 1);
  };

  useEffect(() => {
    if (kmCounter <= 0) {
      setGameState("lose");
    }
  }, [kmCounter]);

  return (
    <div className="container mt-5">
      <div className="flex flex-row justify-content-center">
        <h3>{userScoreCounter} Cities Placed</h3>
        <h3>{kmCounter} Km Left</h3>
        {gameState === "play" && (
          <h5 className="mt-lg-5">
            {" "}
            Select the location of {selectedCity?.capitalCity}
          </h5>
        )}

        {gameState === "check" && distance < 50 && (
          <h5 className="mt-lg-5"> Correct 😃</h5>
        )}

        {gameState === "check" && distance > 50 && (
          <h5 className="mt-lg-5"> Not correct 😵</h5>
        )}

        {gameState === "lose" && <h5 className="mt-lg-5">Game over 👽</h5>}

        {gameState === "win" && <h5 className="mt-lg-5">Good Job 🥳</h5>}
      </div>
      {gameState !== "lose" && gameState !== "win" && (
        <Map
          selectedCity={selectedCity}
          selectedCityIndex={selectedCityIndex}
          setSelectedCityIndex={setSelectedCityIndex}
          handleCheck={handleCheck}
          userCoords={userCoords}
          setUserCoords={setUserCoords}
          isDisabled={isDisabled}
        />
      )}

      {!isDisabled && gameState === "play" && (
        <button onClick={handleCheck} className="mt-2">
          Check
        </button>
      )}

      {!isDisabled && gameState === "check" && (
        <button onClick={handleNextCity} className="mt-2">
          Next City
        </button>
      )}
    </div>
  );
};

export default Homescreen;
