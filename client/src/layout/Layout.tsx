import { Navigate, Route, Routes } from "react-router-dom";

import { Order } from "pages/Order";

export const Layout = () => {
  return (
    <Routes>
      {/* As long as there is no home page */}
      <Route index element={<Navigate to="/online-order" replace />} />
      <Route path="/online-order" element={<Order />} />
    </Routes>
  );
};
