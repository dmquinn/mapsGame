import React, { useState, useEffect } from "react";
import Map from "../components/Map";
import ProgressBar from "../components/ProgressBar";
import { capitalCities } from "../data/cities.json";
import haversineDistance from "../utils/haversineDistance";

const defaultValue = { lat: 0, lng: 0 };

//GameState: play , check , win , lose //

const Homescreen = () => {
  const [gameState, setGameState] = useState("play");
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [distance, setDistance] = useState(0);
  const [cityMarker, setCityMarker] = useState(defaultValue);
  const [userCoords, setUserCoords] = useState(defaultValue);
  const [userScoreCounter, setUserScore] = useState(0);
  const [kmCounter, setKmCounter] = useState(1500);

  const selectedCity = capitalCities?.[selectedCityIndex];

  // disable marker if userCoords are not set/default //

  const isDisabled = userCoords["lat"] === 0 && userCoords["lng"] === 0;

  const handleCheck = (lat, lng) => {
    setGameState("check");

    // using haversine function from utils //

    const distance = haversineDistance(
      selectedCity.lat,
      selectedCity.long,
      userCoords.lat,
      userCoords.lng
    );

    setDistance(distance);
    //
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
    setCityMarker(defaultValue);
  };

  useEffect(() => {
    if (kmCounter <= 0) {
      setGameState("lose");
    }
  }, [kmCounter]);
  useEffect(() => {
    gameState === "check" &&
      distance > 50 &&
      setCityMarker({
        lat: parseFloat(capitalCities[selectedCityIndex].lat),
        lng: parseFloat(capitalCities[selectedCityIndex].long),
      });
  }, [gameState, distance, selectedCityIndex]);

  return (
    <div className="container mt-3">
      <div className="d-flex flex-row justify-content-sm-center justify-content-lg-end">
        {userScoreCounter === 1 ? (
          <h3>{userScoreCounter} City Placed</h3>
        ) : (
          <h3>{userScoreCounter} Cities Placed</h3>
        )}
      </div>
      <div className="d-flex flex-row justify-content-sm-center justify-content-lg-end">
        <h3 className="rounded bg-info text-white p-2">{kmCounter} Km Left</h3>
      </div>
      {gameState === "play" && (
        <h3>
          {" "}
          Select the location of{" "}
          <span className="text-danger text-bold">
            {selectedCity?.capitalCity}
          </span>
        </h3>
      )}{" "}
      {/* // Cases for check, win, lose, // */}
      {gameState === "check" && distance < 50 && (
        <h5 className="mt-lg-3"> Correct 😃</h5>
      )}
      {gameState === "check" && distance > 50 && (
        <h5 className="mt-lg-3"> Not correct 😵</h5>
      )}
      {gameState === "lose" && <h5 className="mt-lg-5">Game over 👽</h5>}
      {gameState === "win" && <h5 className="mt-lg-5">Good Job 🥳</h5>}
      {gameState !== "lose" && gameState !== "win" && (
        <Map
          selectedCity={selectedCity}
          selectedCityIndex={selectedCityIndex}
          setSelectedCityIndex={setSelectedCityIndex}
          handleCheck={handleCheck}
          userCoords={userCoords}
          setUserCoords={setUserCoords}
          isDisabled={isDisabled}
          cityMarker={cityMarker}
        />
      )}
      <ProgressBar kmCounter={kmCounter} />
      {!isDisabled && gameState === "play" && (
        <button onClick={handleCheck} className="mt-2 btn btn-warning">
          Check
        </button>
      )}
      {!isDisabled && gameState === "check" && (
        <button
          onClick={handleNextCity}
          className="mt-2 btn btn-warning text-dark"
        >
          Next City
        </button>
      )}
    </div>
  );
};

export default Homescreen;
