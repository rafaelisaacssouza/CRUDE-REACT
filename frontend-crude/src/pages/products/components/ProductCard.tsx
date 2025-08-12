import { EditIcon, Package, Trash } from "lucide-react";

interface ProductsCardProps {
  productName: string;
  productSku: string;
  productCategory: string;
  productPrice: string | number;
  productStock: string | number;
}

export function ProductCard({
  productName,
  productSku,
  productCategory,
  productPrice,
  productStock,
}: ProductsCardProps) {
  return (
    <div className="flex flex-col bg-zinc-900 gap-4 w-full lg:min-w-[360px] rounded-lg p-4">
      <header className="flex items-start justify-between">
        <div className="flex flex-row gap-2">
          <Package className="h-8 w-8 text-primary bg-accent rounded-lg p-1.5 bg-zinc-600" />
          <div className="flex flex-col items-start">
            <h3 className="text-base font-medium leading-none">
              {productName}
            </h3>
            <p className="text-sm w-full text-gray-400 flex items-center gap-1">
              {productSku}
            </p>
          </div>
        </div>
        <p className="text-base font-medium px-4 rounded-full justify-between bg-indigo-600">
          Ativo
        </p>
      </header>
      <main className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <p className="text-sm w-full text-gray-400 flex items-center gap-1">
            Categoria:
          </p>
          <p className="text-sm font-medium whitespace-nowrap">
            {productCategory}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm w-full text-gray-400 flex items-center gap-1">
            Preço:
          </p>
          <p className="text-sm text-green-500 font-medium whitespace-nowrap">
            {productPrice}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm w-full text-gray-400 flex items-center gap-1">
            Estoque:
          </p>
          <p className="text-sm font-medium whitespace-nowrap">
            {productStock} un.
          </p>
        </div>
      </main>
      <footer className="flex flex-row gap-2">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-zinc-500 h-9 rounded-md px-3 flex-1 cursor-pointer hover:bg-zinc-800">
          <EditIcon /> Editar
        </button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-red-500 text-sm font-medium ring-offset-background transition-colors  disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-zinc-500 h-9 rounded-md px-3 cursor-pointer hover:bg-zinc-800">
          <Trash />
        </button>
      </footer>
    </div>
  );
}
