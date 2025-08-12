interface ResumeProps {
  title: string;
  children: React.ReactNode;
}

export function Resume({ title, children }: ResumeProps) {
  return (
    <div className="p-6 rounded-xl border bg-zinc-900 border-zinc-800">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <main className="flex flex-col p-2 border bg-zinc-950 border-zinc-800 rounded-lg gap-2">
        {children}
      </main>
    </div>
  );
}

interface ResumeContentProps {
  itemID: number;
  clientName: string;
  status: string;
  total: string;
}

export function ResumeContent({
  itemID,
  clientName,
  status,
  total,
}: ResumeContentProps) {
  return (
    <div className=" bg-zinc-900 justify-between rounded-lg flex">
      <div className="flex flex-col p-4">
        <p className="text-base font-medium">Pedido #{itemID}</p>
        <p className="text-sm text-gray-400">Cliente: {clientName}</p>
      </div>
      <div className="flex flex-col p-4 items-end">
        <p className="text-base font-medium">Status: {status}</p>
        <p className="text-sm text-gray-400">Total: R$ {total}</p>
      </div>
    </div>
  );
}

interface ProductResumeProps {
  alertThreshold: number;
  productName: string;
  sku: string;
  unitsLeft: number | string;
}

export function ProductResume({
  productName,
  sku,
  unitsLeft,
  alertThreshold,
}: ProductResumeProps) {
  return (
    <div className=" bg-zinc-900 justify-between rounded-lg flex">
      <div className="flex flex-col p-4">
        <p className="text-base font-medium">Produto {productName}</p>
        <p className="text-sm text-gray-400">SKU: {sku}</p>
      </div>
      <div className="flex flex-col p-4  justify-center items-end">
        <p
          className={`text-base font-medium ${getUnitsColor(
            unitsLeft,
            alertThreshold
          )}`}
        >
          {unitsLeftToString(unitsLeft)}
        </p>
      </div>
    </div>
  );
}

function unitsLeftToString(units: number | string): string {
  const parsed = Number(String(units).trim());
  if (parsed === 0) return "Esgotado";
  if (parsed === 1) return "1 unidade";
  return `${parsed} unidades`;
}

function getUnitsColor(units: number | string, alertThreshold: number): string {
  const parsed = Number(units);
  if (isNaN(parsed)) return "text-gray-400";
  if (parsed === 0) return "text-red-500";
  if (parsed <= alertThreshold) return "text-yellow-500";
  return "text-green-500";
}
