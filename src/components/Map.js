import React, { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import guess from "../guess.svg";
import correct from "../correct.svg";

const googleMapsApiKey = process.env.REACT_APP_MAPS_API;

const containerStyles = { height: " 60vh", width: "100%" };

const Map = ({ userCoords, setUserCoords, isDisabled, cityMarker }) => {
  const onClick = (mapsMouseEvent) => {
    const clickedCoords = mapsMouseEvent.latLng.toJSON();
    setUserCoords(clickedCoords);
  };
  useEffect(() => {
    console.log("cityMarker", cityMarker);
  }, [cityMarker]);
  return (
    <div className="mt-5 mapContainer">
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyles}
          options={{ mapId: "308f088b283cdeca" }}
          zoom={4}
          center={{
            lat: 47.39161343450445,
            lng: 8.53224995720814,
          }}
          onClick={onClick}
        >
          {!isDisabled && <Marker position={userCoords} icon={guess} />}
          <Marker position={cityMarker} icon={correct} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
