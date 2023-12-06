import React from "react";

import { OrderMap, OrderMenu } from "./";
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
