import React from "react";

import { OrderMap } from "./OrderMap";
import { OrderMenu } from "./OrderMenu";
import { OrderSectionStyled, OrderSectionWrapper } from "./styled";

export const OrderSection = () => {
  return (
    <OrderSectionStyled>
      <OrderSectionWrapper>
        <OrderMenu />
        <OrderMap />
      </OrderSectionWrapper>
    </OrderSectionStyled>
  );
};
