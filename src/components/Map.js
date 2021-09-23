import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapData from "../data/cities.js";

const Map = ({ userGuess, setUserGuess }) => {
  const key = process.env.REACT_APP_MAPS_API;
  const [markerPosition, setMarkerPosition] = useState(["37.772", "-122.214"]);
  const containerStyles = { height: " 60vh", width: "100%" };

  const defaultCenter = {
    lat: markerPosition[0],
    lng: markerPosition[1],
  };

  const position = {
    lat: 47.39161343450445,
    lng: 8.53224995720814,
  };
  const center = [
    {
      lat: 37.772,
      lng: -122.214,
    },
  ];

  useEffect(() => {
    console.log(userGuess);
  }, [userGuess]);
  return (
    <div className="mt-5">
      <LoadScript googleMapsApiKey="" mapIds={["888f19da17aa5881"]}>
        <GoogleMap
          mapContainerStyle={containerStyles}
          options={{ mapId: "888f19da17aa5881" }}
          zoom={4}
          center={position}
        >
          <Marker
            position={position}
            draggable={true}
            // onDragEnd={(e) => setUserGuess(e)}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
