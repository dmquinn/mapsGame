import { useEffect, useState } from "react";
import Homescreen from "./pages/Homescreen";
import mapData from "./data/cities.js";

const App = () => {
  const [randomCity, setRandomCity] = useState({});
  const [userGuess, setUserGuess] = useState([]);
  const randomNumber = Math.floor(Math.random() * mapData.length);

  useEffect(() => {
    setRandomCity(mapData[randomNumber]);
    console.log(randomCity);
  }, []);
  return (
    <div className="App">
      <Homescreen
        randomCity={randomCity}
        userGuess={userGuess}
        setUserGuess={setUserGuess}
      />
    </div>
  );
};

export default App;
