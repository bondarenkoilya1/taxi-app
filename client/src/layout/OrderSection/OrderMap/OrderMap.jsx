import React from "react";

import { GoogleMap } from "@react-google-maps/api";

export const OrderMap = () => {
  const center = { lat: 53.35, lng: -6.26 };

  return (
    <GoogleMap
      zoom={11}
      center={center}
      mapContainerStyle={{ height: "70vh", flex: 1 }}
      options={{ disableDefaultUI: true, keyboardShortcuts: false }}
    />
  );
};
