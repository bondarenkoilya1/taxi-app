import React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import usePlacesAutocomplete from "use-places-autocomplete";

export const AutocompleteComponent = ({ styles, label, placeholder }) => {
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

  const handleInputChange = ({ target }) => setValue(target.value);

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

AutocompleteComponent.propTypes = {
  styles: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

AutocompleteComponent.defaultProps = {
  styles: { width: 300 },
  label: "Autocomplete Label",
  placeholder: "Autocomplete Placeholder"
};
