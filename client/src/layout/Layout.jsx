import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Order } from "../pages";

export const Layout = () => {
  return (
    <Routes>
      {/* As long as there is no home page */}
      <Route index element={<Navigate to="/online-order" replace />} />
      <Route exact path="/online-order" element={<Order />} />
    </Routes>
  );
};
