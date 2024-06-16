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

type ModeProps = {
  mode: MapModeValues;
  toggleMode: () => void;
};

export type MapProps = {
  markers: Coordinates[];
  onMarkerAdd: (coordinates: Coordinates) => void;
} & ModeProps;

export type ChangeMapModeProps = ModeProps;
