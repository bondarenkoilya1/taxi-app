import React from "react";

import type { MarkerProps } from "@react-google-maps/api";
import { Marker as ChosenLocationMarker } from "@react-google-maps/api";

export const Marker: React.FC<MarkerProps> = ({ position }) => {
  return <ChosenLocationMarker position={position} />;
};
