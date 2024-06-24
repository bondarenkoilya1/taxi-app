import { RefObject } from "react";

export const a = 1;

export type OrderMenuProps = {
  originRef: RefObject<HTMLInputElement>;
  destinationRef: RefObject<HTMLInputElement>;
  calculateRoute: () => void;
  clearRoute: () => void;
};
