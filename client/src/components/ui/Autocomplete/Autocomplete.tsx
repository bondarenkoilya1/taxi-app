import React, { ChangeEvent } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import type { AddressListProps, AutocompleteProps } from "types";
import usePlacesAutocomplete from "use-places-autocomplete";

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

  return (
    <Autocomplete
      disablePortal
      options={addressList()}
      sx={styles}
      popupIcon={null}
      renderInput={(params) => (
        <TextField
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
