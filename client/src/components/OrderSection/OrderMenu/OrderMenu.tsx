import React from "react";

import { OrderMenuButtonsGroup, OrderMenuItemsGroup, OrderMenuStyled } from "./styled";

import { ButtonComponent } from "components/ui";
import { AutocompleteComponent } from "components/ui/Autocomplete";

import type { OrderMenuProps } from "types";

export const OrderMenu: React.FC<OrderMenuProps> = ({
  originRef,
  destinationRef,
  setRoute,
  resetRoute
}) => {
  return (
    <OrderMenuStyled>
      <OrderMenuItemsGroup>
        <AutocompleteComponent
          styles={{ marginBottom: "1rem" }}
          label="Pick up location"
          placeholder="John Scottus Primary School"
          componentRef={originRef}
        />
        <AutocompleteComponent
          label="Where to go"
          placeholder="Dec Nolan Office"
          componentRef={destinationRef}
        />
        <OrderMenuButtonsGroup>
          <ButtonComponent
            variant="contained"
            color="primary"
            size="medium"
            onClick={setRoute}
            styles={{ width: "56%" }}>
            Set the route
          </ButtonComponent>
          <ButtonComponent
            variant="outlined"
            color="secondary"
            size="medium"
            onClick={resetRoute}
            styles={{ width: "40%" }}>
            Reset the route
          </ButtonComponent>
        </OrderMenuButtonsGroup>
      </OrderMenuItemsGroup>
    </OrderMenuStyled>
  );
};
