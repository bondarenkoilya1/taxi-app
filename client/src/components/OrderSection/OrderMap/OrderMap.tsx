import React, { useCallback } from "react";

import { DirectionsRenderer, GoogleMap } from "@react-google-maps/api";

import { MapContainerStyled } from "./styled";

import { MAP_MODES } from "constants/index";

import { Marker } from "components/ui/Marker";

import { type MapProps } from "types";

import { ChangeMapMode } from "./ChangeMapMode";

const defaultCenter = { lat: 53.35, lng: -6.26 };
const defaultOptions = {
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
  // todo: discover about google maps api and maybe use later
  // const mapRef = useRef<google.maps.Map | null>(null);
  // const onLoad = useCallback((map: google.maps.Map) => {
  //   mapRef.current = map;
  // }, []);

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
        center={defaultCenter}
        mapContainerStyle={{ height: "70vh" }}
        options={defaultOptions}
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
