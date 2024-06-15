export type Coordinates = {
  lat: number;
  lng: number;
};

export type LocationObject = {
  latLng: {
    lat: () => number;
    lng: () => number;
  };
};

export type MarkerProps = {
  position: Coordinates;
};
