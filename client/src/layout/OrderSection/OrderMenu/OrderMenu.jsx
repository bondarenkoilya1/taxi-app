import React from "react";

import { OrderMenuInput, OrderMenuInputGroup, OrderMenuStyled } from "./styled";

export const OrderMenu = () => {
  return (
    <OrderMenuStyled>
      <OrderMenuInputGroup>
        <OrderMenuInput name="address" placeholder="Address" />
        <OrderMenuInput name="from" placeholder="Where to go" />
      </OrderMenuInputGroup>
    </OrderMenuStyled>
  );
};
