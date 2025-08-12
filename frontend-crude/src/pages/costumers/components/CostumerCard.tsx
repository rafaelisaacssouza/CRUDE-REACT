import { Mail, MapPin, Phone } from "lucide-react";

interface CostumerCardProps {
  clientName: string;
  clientEmail: string;
  clientTel: string;
  clientLoc: string;
  singupDate: string;
}

export function CostumerCard({
  clientName,
  clientEmail,
  clientTel,
  clientLoc,
  singupDate,
}: CostumerCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-zinc-900 gap-4 w-full lg:min-w-[360px] rounded-lg p-4">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row items-center gap-4">
          <p className="text-base font-medium">{clientName}</p>
          <p className="text-base font-medium px-4 rounded-full justify-between bg-indigo-600">
            Ativo
          </p>
        </div>
        <div className="flex items-center flex-col md:flex-row">
          <p className="text-sm w-full text-gray-400 flex items-center gap-1">
            <Mail size={14} /> {clientEmail}
          </p>
          <p className="text-sm w-full text-gray-400 flex items-center gap-1">
            <Phone size={14} /> {clientTel}
          </p>
        </div>
        <div>
          <p className="text-sm w-full text-gray-400 flex items-center gap-1">
            <MapPin size={14} /> {clientLoc}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Cadastrado em {singupDate}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <button className="w-full cursor-pointer md:w-auto p-2 rounded-lg bg-zinc-500">
          Editar
        </button>
        <button className="w-full cursor-pointer md:w-auto p-2 rounded-lg bg-zinc-500">
          Excluir
        </button>
      </div>
    </div>
  );
}
