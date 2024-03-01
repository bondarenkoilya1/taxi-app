import React from "react";

import { GOOGLE_MAP } from "@config";
import { useLoadScript } from "@react-google-maps/api";

import { OrderMap, OrderMenu } from "./";
import { OrderSectionStyled, OrderSectionWrapper } from "./styled";

const libraries = ["places"];

export const OrderSection = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP.API_KEY,
    libraries
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <OrderSectionStyled>
      <OrderSectionWrapper>
        <OrderMenu />
        <OrderMap />
      </OrderSectionWrapper>
    </OrderSectionStyled>
  );
};
