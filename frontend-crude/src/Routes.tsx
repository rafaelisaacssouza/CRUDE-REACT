import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Orders } from "./pages/orders/Orders";
import { Products } from "./pages/products/Products";
import { Costumers } from "./pages/costumers/Costumers";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clientes" element={<Costumers />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/pedidos" element={<Orders />} />
    </Routes>
  );
}
