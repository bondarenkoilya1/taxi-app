import { RefObject } from "react";

// todo: get some knowledge about generics and change this to the MUI Autcomplete props
export type StyleAttributes = {
  [key: string]: number | string;
};

export type AutocompleteProps = {
  styles?: StyleAttributes;
  label: string;
  placeholder: string;
  componentRef?: RefObject<HTMLInputElement>;
};

export type AddressListProps = {
  label: string;
  key: string;
};
