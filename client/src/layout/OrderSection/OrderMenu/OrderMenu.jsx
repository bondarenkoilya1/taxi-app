import React from "react";

import { AutocompleteComponent } from "../../../components/Autocomplete";
import { OrderMenuInputGroup, OrderMenuStyled } from "./styled";

export const OrderMenu = () => {
  return (
    <OrderMenuStyled>
      <OrderMenuInputGroup>
        <AutocompleteComponent
          styles={{ width: 300, mb: 3 }}
          label="Pick up location"
          placeholder="John Scottus Primary School"
        />
        <AutocompleteComponent
          styles={{ width: 300 }}
          label="Where to go"
          placeholder="Dec Nolan Office"
        />
      </OrderMenuInputGroup>
    </OrderMenuStyled>
  );
};
