import { RefObject } from "react";

export type OrderMenuProps = {
  originRef: RefObject<HTMLInputElement>;
  destinationRef: RefObject<HTMLInputElement>;
  setRoute: () => void;
  resetRoute: () => void;
};
