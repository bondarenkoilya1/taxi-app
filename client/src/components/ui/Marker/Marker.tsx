import React from "react";

import { Marker as ChosenLocationMarker } from "@react-google-maps/api";
import type { MarkerProps } from "types";

export const Marker: React.FC<MarkerProps> = ({ position }) => {
  return <ChosenLocationMarker position={position} />;
};
