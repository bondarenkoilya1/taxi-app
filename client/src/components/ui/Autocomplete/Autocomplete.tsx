import React, { ChangeEvent } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import type { AutocompleteProps } from "types";
import usePlacesAutocomplete from "use-places-autocomplete";

export const AutocompleteComponent: React.FC<AutocompleteProps> = ({
  styles,
  label,
  placeholder
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

  const addressList = () => {
    if (status === "OK") {
      return data.reduce((acc, { place_id, description }) => {
        return [...acc, { label: description, key: place_id }];
      }, []);
    }

    return [];
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value);

  // ADD MARKERS DEPEND ON location chosen IN INPUT
  // const handleSelect =
  //   ({ description }) =>
  //   () => {
  //     setValue(description, false);

  //     getGeocode({ address: description }).then((results) => {
  //       const { lat, lng } = getLatLng(results[0]);
  //       console.log("📍 MarkerProps: ", { lat, lng });
  //     });
  //   };

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
        />
      )}
    />
  );
};
