import { createContext, useContext, useState } from "react";
import logoFull from "../assets/logo-full.svg";
import { ChevronFirst, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

interface SideBarProps {
  children: React.ReactNode;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isSelected?: boolean;
  to?: string; // Optional prop for navigation
}
interface SidebarContextProps {
  active: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);
export function SideBar({ children }: SideBarProps) {
  const [active, setActive] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col p-2  bg-zinc-950 text-white border-r border-zinc-800">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logoFull}
            className={`overflow-hidden transition-all ${
              active ? "w-16" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setActive((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-600 hover:bg-gray-500"
          >
            {active ? (
              <ChevronFirst />
            ) : (
              <ChevronFirst className="rotate-180" />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ active }}>
          <ul className=" flex-1 px-3 ">{children}</ul>
        </SidebarContext.Provider>
        <div
          className={`flex items-center rounded-xl bg-zinc-800 border border-zinc-700 p-3 overflow-hidden transition-all duration-300 ${
            active ? "justify-start" : "justify-center"
          }`}
        >
          {/* Imagem sempre visível */}
          <div className="shrink-0">
            <img
              src="https://mockmind-api.uifaces.co/content/human/80.jpg"
              alt="Foto do usuário"
              className="w-10 h-10 rounded-md"
            />
          </div>

          {/* Área de texto visível apenas quando 'active' */}
          <div
            className={`flex items-center transition-all duration-300 ease-in-out overflow-hidden ${
              active ? "ml-3 w-52" : "ml-0 w-0"
            }`}
          >
            <div className="leading-4 flex-1">
              <h4 className="font-semibold text-white">John Doe</h4>
              <span className="text-xs text-gray-200">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} className="text-white" />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, isSelected, to }: SidebarItemProps) {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("SidebarItem must be used within a SideBar");
  const { active } = context;
  return (
    <li>
      <Link
        to={to ?? "#"}
        className={`flex items-center py-2 px-3 rounded-md cursor-pointer transition-colors ${
          isSelected
            ? "bg-zinc-700 text-white"
            : "text-gray-400 hover:bg-zinc-700"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            active ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}
