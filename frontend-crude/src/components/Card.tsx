import { TrendingUp, User } from "lucide-react";

interface CardProps {
  // You can add props here if needed in the future
  Label?: string;
  Value?: string;
  Stats: number;
}

export function Card({ Label, Value, Stats }: CardProps) {
  return (
    <div className="bg-zinc-900 gap-4 p-4 flex flex-col rounded-xl border border-zinc-900">
      <header className="flex flex-1 justify-between text-gray-200">
        <h2 className="text-base font-medium ">{Label}</h2>
        <User />
      </header>
      <main>
        <strong className="text-white text-2xl">{Value}</strong>
      </main>
      <footer className="flex items-center gap-2 text-gray-400">
        <TrendingUp />
        <span className="text-sm text-gray-400">
          {Stats}% desde o mês passado
        </span>
      </footer>
    </div>
  );
}
