import { LayoutDashboard, Package, ShoppingCart, Users } from "lucide-react";
import { SideBar, SidebarItem } from "./components/SideBar";
import { Header } from "./components/Header";
import { AppRoutes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex text-white bg-zinc-950 h-screen">
        <SideBar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            to="/"
          />
          <SidebarItem
            icon={<Users size={20} />}
            text="Clientes"
            to="/clientes"
          />
          <SidebarItem
            icon={<Package size={20} />}
            text="Produtos"
            to="/produtos"
          />
          <SidebarItem
            icon={<ShoppingCart size={20} />}
            text="Pedidos"
            to="/pedidos"
          />
        </SideBar>
        <div className="flex-1 overflow-auto">
          <Header />
          <main className="p-4">
            <AppRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
