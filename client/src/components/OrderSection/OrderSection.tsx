import { useCallback, useState } from "react";

import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_MAP } from "config";
// TODO: find a way to remove index
import { MAP_MODES } from "constants/index";
import type { MapModeValues } from "types/Map";
import type { Coordinates } from "types/MarkerProps";

import { OrderMap, OrderMenu } from ".";
import { OrderSectionStyled, OrderSectionWrapper } from "./styled";

const libraries: Libraries = ["places"];

export const OrderSection = () => {
  const [mode, setMode] = useState<MapModeValues>(MAP_MODES.MOVE);
  const [markers, setMarkers] = useState([
    { lat: 53.35, lng: -6.26 },
    { lat: 53.45, lng: -6.26 },
    { lat: 53.4, lng: -6.26 }
  ]);

  // TODO: Decide is it okay for users to remove markers that way
  if (markers.length > 2) {
    markers.shift();
  }

  // eslint-disable-next-line no-unused-vars
  const onMarkerAdd: (coordinates: Coordinates) => void = useCallback((coordinates) => {
    setMarkers((prevMarkers) => [...prevMarkers, coordinates]);
  }, []);

  const toggleMode = () => {
    setMode((prevMode) => {
      return prevMode === MAP_MODES.MOVE ? MAP_MODES.SET_MARKER : MAP_MODES.MOVE;
    });
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP.API_KEY,
    id: GOOGLE_MAP.ID,
    libraries
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <OrderSectionStyled>
      <OrderSectionWrapper>
        <OrderMenu />
        <OrderMap markers={markers} onMarkerAdd={onMarkerAdd} mode={mode} toggleMode={toggleMode} />
      </OrderSectionWrapper>
    </OrderSectionStyled>
  );
};
