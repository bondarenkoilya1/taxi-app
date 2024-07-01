export const getTravelMode = () => {
  if (window.google?.maps) {
    return window.google.maps.TravelMode.DRIVING;
  }

  throw new Error("Google Maps API is not loaded yet.");
};
