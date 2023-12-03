import React from "react";
import { Route, Routes } from "react-router-dom";

import { Order } from "../pages";

export const Layout = () => {
  return (
    <Routes>
      <Route path="/online-order" element={<Order />} />
    </Routes>
  );
};
