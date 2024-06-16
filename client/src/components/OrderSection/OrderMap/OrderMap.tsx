import React, { useCallback } from "react";

import { GoogleMap } from "@react-google-maps/api";
import { Marker } from "components/ui/Marker";
import { MAP_MODES } from "constants/index";
import { type LocationObject, MapProps } from "types";

import { ChangeMapMode } from "./ChangeMapMode";
import { MapContainerStyled } from "./styled";

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

  return (
    <MapContainerStyled>
      <ChangeMapMode mode={mode} toggleMode={toggleMode} />
      <GoogleMap
        zoom={11}
        center={center}
        mapContainerStyle={{ height: "70vh" }}
        options={{ disableDefaultUI: true, keyboardShortcuts: false }}
        onClick={OnMapClick}>
        {markers.map((position) => (
          <Marker position={position} key={crypto.randomUUID()} />
        ))}
      </GoogleMap>
    </MapContainerStyled>
  );
};
