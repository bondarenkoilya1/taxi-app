import React, { useCallback } from "react";

import { DirectionsRenderer, GoogleMap } from "@react-google-maps/api";
import { Marker } from "components/ui/Marker";
import { MAP_MODES } from "constants/index";
import { type MapProps } from "types";

import { ChangeMapMode } from "./ChangeMapMode";
import { MapContainerStyled } from "./styled";

const center = { lat: 53.35, lng: -6.26 };
const options = {
  disableDefaultUI: true,
  keyboardShortcuts: false,
  clickableIcons: false
};

export const OrderMap: React.FC<MapProps> = ({
  markers,
  onMarkerAdd,
  mode,
  toggleMode,
  directionsResponse
}) => {
  // todo: analyze, type this
  // const mapRef = useRef<GoogleMap>();
  // const onLoad = useCallback((map) => (mapRef.current = map), []);

  const OnMapClick = useCallback(
    (location: google.maps.MapMouseEvent) => {
      if (location.latLng && mode === MAP_MODES.SET_MARKER) {
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
        options={options}
        onClick={OnMapClick}>
        {/* onLoad={onLoad} */}
        {markers.map((position) => (
          <Marker position={position} key={crypto.randomUUID()} />
        ))}
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
    </MapContainerStyled>
  );
};
