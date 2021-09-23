import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const googleMapsApiKey = process.env.REACT_APP_MAPS_API;

const containerStyles = { height: " 60vh", width: "100%" };

const Map = ({
  selectedCity,
  handleCheck,
  userCoords,
  setUserCoords,
  isDisabled,
}) => {
  const onClick = (mapsMouseEvent) => {
    const clickedCoords = mapsMouseEvent.latLng.toJSON();

    setUserCoords(clickedCoords);
  };

  return (
    <div className="mt-5">
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
          {!isDisabled && <Marker position={userCoords} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
