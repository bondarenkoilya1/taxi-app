import { Navigate, Route, Routes } from "react-router-dom";

import { Login, Order, Register } from "pages";

export const Layout = () => {
  return (
    <Routes>
      {/* As long as there is no home page */}
      <Route index element={<Navigate to="/online-order" replace />} />
      <Route path="/online-order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
