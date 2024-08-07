import { useCallback, useRef, useState } from "react";

import { Libraries, useJsApiLoader } from "@react-google-maps/api";

import { OrderSectionStyled, OrderSectionWrapper } from "./styled";

import { GOOGLE_MAP } from "config";

import { MAP_MODES } from "constants";

import type { MapModeValues } from "types";
import type { Coordinates } from "types";

import { getTravelMode } from "utils";

import { OrderMap, OrderMenu } from ".";

const libraries: Libraries = ["places"];

export const OrderSection = () => {
  const [mode, setMode] = useState<MapModeValues>(MAP_MODES.MOVE);
  const [markers, setMarkers] = useState<Coordinates[]>([]);
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(
    null
  );

  const originRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  // todo: Markers don't keep position
  const onMarkerAdd = useCallback((coordinates: Coordinates) => {
    setMarkers((prevMarkers) => {
      if (prevMarkers.length >= 2) {
        return [...prevMarkers.slice(1), coordinates];
      }

      return [...prevMarkers, coordinates];
    });
  }, []);

  const toggleMode = () => {
    setMode((prevMode) => {
      return prevMode === MAP_MODES.MOVE ? MAP_MODES.SET_MARKER : MAP_MODES.MOVE;
    });
  };

  // todo: define place of this code
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP.API_KEY,
    id: GOOGLE_MAP.ID,
    libraries
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const setRoute = async () => {
    const origin = originRef?.current?.value || "";
    const destination = destinationRef?.current?.value || "";

    if (!origin || !destination) {
      const missingRef = !origin ? "Origin" : "Destination";
      console.error(`${missingRef} reference is missing`);

      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    const result = await directionsService.route({
      origin,
      destination,
      travelMode: getTravelMode()
    });

    setDirectionsResponse(result);
  };

  const resetRoute = () => {
    setDirectionsResponse(null);

    if (originRef.current) originRef.current.value = "";
    if (destinationRef.current) destinationRef.current.value = "";
  };

  return (
    <OrderSectionStyled>
      <OrderSectionWrapper>
        <OrderMenu
          originRef={originRef}
          destinationRef={destinationRef}
          setRoute={setRoute}
          resetRoute={resetRoute}
        />
        <OrderMap
          markers={markers}
          onMarkerAdd={onMarkerAdd}
          mode={mode}
          toggleMode={toggleMode}
          directionsResponse={directionsResponse}
        />
      </OrderSectionWrapper>
    </OrderSectionStyled>
  );
};
