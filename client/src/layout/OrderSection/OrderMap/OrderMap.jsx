import React from "react";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

import { OrderMapStyled } from "./styled";

export const OrderMap = () => {
  const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const GOOGLE_MAP_ID = process.env.REACT_APP_GOOGLE_MAP_ID;

  const position = { lat: 50.4, lng: 30.5 };

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <OrderMapStyled>
        <Map zoom={9} center={position} mapId={GOOGLE_MAP_ID}></Map>
      </OrderMapStyled>
    </APIProvider>
  );
};
