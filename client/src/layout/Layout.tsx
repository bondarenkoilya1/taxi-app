import { Navigate, Route, Routes } from "react-router-dom";

import { Login, Order } from "pages";

export const Layout = () => {
  return (
    <Routes>
      {/* As long as there is no home page */}
      <Route index element={<Navigate to="/online-order" replace />} />
      <Route path="/online-order" element={<Order />} />
      <Route path="/auth" element={<Login />} />
    </Routes>
  );
};
