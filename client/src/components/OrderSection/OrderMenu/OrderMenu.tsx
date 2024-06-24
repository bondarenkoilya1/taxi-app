import React from "react";

import { AutocompleteComponent } from "components/ui/Autocomplete";
import type { OrderMenuProps } from "types";

import { OrderMenuInputGroup, OrderMenuStyled } from "./styled";

export const OrderMenu: React.FC<OrderMenuProps> = ({
  originRef,
  destinationRef,
  calculateRoute,
  clearRoute
}) => {
  return (
    <OrderMenuStyled>
      <OrderMenuInputGroup>
        <AutocompleteComponent
          styles={{ width: 300, marginBottom: "1rem" }}
          label="Pick up location"
          placeholder="John Scottus Primary School"
          componentRef={originRef}
        />
        <AutocompleteComponent
          styles={{ width: 300 }}
          label="Where to go"
          placeholder="Dec Nolan Office"
          componentRef={destinationRef}
        />
        {/* todo: make button component */}
        <button onClick={calculateRoute}>Calculate</button>
        <button onClick={clearRoute}>Clear</button>
      </OrderMenuInputGroup>
    </OrderMenuStyled>
  );
};
