import React, { ChangeEvent } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

import Autocomplete from "@mui/material/Autocomplete";

import { Input } from "components";

import type { AddressListProps, AutocompleteProps } from "types";

// todo: move to autocomplete props provided by library
// todo: maybe move usage of usePlacesAutocomplete hook higher by hierarchy because of possible reusability
export const AutocompleteComponent: React.FC<AutocompleteProps> = ({
  styles,
  label,
  placeholder,
  componentRef
}) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data }
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "irl" }
    }
  });

  const addressList = (): AddressListProps[] => {
    if (status === "OK") {
      return data.map(({ place_id, description }) => ({
        label: description,
        key: place_id
      }));
    }

    return [];
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value);

  const checkIfOptionEqualToValue = (option: AddressListProps, value: AddressListProps) =>
    option.key === value.key && option.label === value.label;

  return (
    <Autocomplete
      disablePortal
      options={addressList()}
      sx={styles}
      popupIcon={null}
      isOptionEqualToValue={checkIfOptionEqualToValue}
      renderInput={(params) => (
        <Input
          {...params}
          value={value}
          onChange={handleInputChange}
          disabled={!ready}
          label={label}
          placeholder={placeholder}
          inputRef={componentRef}
        />
      )}
    />
  );
};
