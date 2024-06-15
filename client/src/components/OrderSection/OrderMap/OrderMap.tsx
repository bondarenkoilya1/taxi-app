import React, { useCallback } from "react";

import { GoogleMap } from "@react-google-maps/api";
import { Marker } from "components/ui/Marker";
import { MAP_MODES } from "constants/index";
import { type LocationObject, MapProps } from "types";

export const OrderMap: React.FC<MapProps> = ({ markers, onMarkerAdd, mode, toggleMode }) => {
  const center = { lat: 53.35, lng: -6.26 };

  const OnMapClick = useCallback(
    (location: LocationObject) => {
      if (mode === MAP_MODES.SET_MARKER) {
        const lat = location.latLng.lat();
        const lng = location.latLng.lng();
        onMarkerAdd({ lat, lng });
      }
    },
    [mode, onMarkerAdd]
  );

  // TODO: Get rid of these divs
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column"
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 auto 30px auto"
        }}>
        <button
          type="button"
          onClick={toggleMode}
          style={{
            width: "300px",
            fontSize: "20px",
            textTransform: "uppercase",
            padding: "8px 0"
          }}>
          I want to set markers
        </button>
        <input
          type="checkbox"
          style={{ marginLeft: "10px", width: "50px", height: "40px" }}
          checked={mode === MAP_MODES.SET_MARKER}
        />
      </div>
      <GoogleMap
        zoom={11}
        center={center}
        mapContainerStyle={{ height: "70vh" }}
        options={{ disableDefaultUI: true, keyboardShortcuts: false }}
        onClick={OnMapClick}>
        {markers.map((position) => (
          // TODO: deal with the key attribute
          <Marker position={position} key={position.lat} />
        ))}
      </GoogleMap>
    </div>
  );
};
