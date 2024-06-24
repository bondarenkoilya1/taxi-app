import { RefObject } from "react";

export type StyleAttributes = {
  [key: string]: number | string;
};

export type AutocompleteProps = {
  styles: StyleAttributes;
  label: string;
  placeholder: string;
  componentRef?: RefObject<HTMLInputElement>;
};

export type AddressListProps = {
  label: string;
  key: string;
};
