import { Heading } from "../../components/Heading";
import { ProductCard } from "./components/ProductCard";

export function Products() {
  return (
    <div>
      <Heading
        title="Produtos"
        subtitle="Gerencie seu catálogo de produtos"
        hasButton={true}
        buttonText="Novo Produto"
        onButtonClick={() => alert("Adicionar Produto")}
      />
      <div className="flex-col border border-zinc-800 rounded-lg p-4 bg-zinc-900 min-w-[320px]">
        <input
          type="text"
          placeholder="Buscar produtos"
          className="w-full p-2 mb-4 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2 bg-zinc-950 border border-zinc-800 rounded-lg p-2">
          <ProductCard
            productName="Notebook Dell"
            productSku="NTB-454"
            productCategory="Eletrônicos"
            productPrice="R$450,00"
            productStock={450}
          />
        </main>
      </div>
    </div>
  );
}
