import React from "react";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

import { GOOGLE_MAP } from "../../../config";
import { OrderMapStyled } from "./styled";

export const OrderMap = () => {
  const position = { lat: 50.4, lng: 30.5 };

  return (
    <APIProvider apiKey={GOOGLE_MAP.API_KEY}>
      <OrderMapStyled>
        <Map zoom={9} center={position} mapId={GOOGLE_MAP.ID}></Map>
      </OrderMapStyled>
    </APIProvider>
  );
};
