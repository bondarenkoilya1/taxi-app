import React from "react";

import { GoogleMap } from "@react-google-maps/api";

export const OrderMap = () => {
  const center = { lat: 50.4, lng: 30.5 };

  return <GoogleMap zoom={9} center={center} mapContainerStyle={{ height: "70vh", flex: 1 }} />;
};
