import { RefObject } from "react";

export const a = 1;

export type OrderMenuProps = {
  originRef: RefObject<HTMLInputElement>;
  destinationRef: RefObject<HTMLInputElement>;
  setRoute: () => void;
  resetRoute: () => void;
};
