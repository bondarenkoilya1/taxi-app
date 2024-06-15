import type { Coordinates } from ".";

export type MapData = {
  API_KEY: string;
  ID: string;
};

export type MapModes = {
  MOVE: number;
  SET_MARKER: number;
};

export type MapModeValues = MapModes[keyof MapModes];

export type MapProps = {
  markers: Coordinates[];
  onMarkerAdd: (coordinates: Coordinates) => void;
  mode: MapModeValues;
  toggleMode: () => void;
};
