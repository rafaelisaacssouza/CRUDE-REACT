import { Heading } from "../../components/Heading";
import { CostumerCard } from "./components/CostumerCard";

export function Costumers() {
  return (
    <div>
      <Heading
        title="Clientes"
        subtitle="Gerencie seus clientes"
        hasButton={true}
        buttonText="Adicionar Cliente"
        onButtonClick={() => alert("Adicionar Cliente")}
      />
      <div className="flex-col border border-zinc-800 rounded-lg p-4 bg-zinc-900 min-w-[320px]">
        <input
          type="text"
          placeholder="Buscar clientes..."
          className="w-full p-2 mb-4 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <main className="flex flex-col gap-2 md:gap-2 bg-zinc-950 border border-zinc-800 rounded-lg p-2">
          <CostumerCard
            clientName="Rafael Isaac"
            clientEmail="email@email.com"
            clientTel="(11) 99999-9999"
            clientLoc="São Paulo, SP"
            singupDate="01/01/2023"
          />
          <CostumerCard
            clientName="Rafael Isaac"
            clientEmail="email@email.com"
            clientTel="(11) 99999-9999"
            clientLoc="São Paulo, SP"
            singupDate="01/01/2023"
          />
          <CostumerCard
            clientName="Rafael Isaac"
            clientEmail="email@email.com"
            clientTel="(11) 99999-9999"
            clientLoc="São Paulo, SP"
            singupDate="01/01/2023"
          />
          <CostumerCard
            clientName="Rafael Isaac"
            clientEmail="email@email.com"
            clientTel="(11) 99999-9999"
            clientLoc="São Paulo, SP"
            singupDate="01/01/2023"
          />
          <CostumerCard
            clientName="Rafael Isaac"
            clientEmail="email@email.com"
            clientTel="(11) 99999-9999"
            clientLoc="São Paulo, SP"
            singupDate="01/01/2023"
          />
          <CostumerCard
            clientName="Rafael Isaac"
            clientEmail="email@email.com"
            clientTel="(11) 99999-9999"
            clientLoc="São Paulo, SP"
            singupDate="01/01/2023"
          />
        </main>
      </div>
    </div>
  );
}
