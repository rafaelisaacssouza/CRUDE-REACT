import { Card } from "../../components/Card";
import { Heading } from "../../components/Heading";
import { ProductResume, Resume, ResumeContent } from "../../components/Resume";

export function Dashboard() {
  return (
    <div>
      <Heading title="Dashboard" subtitle="Visão geral do seu sistema ERP" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card Label="Total de Clientes" Value="2,543,000" Stats={12} />
        <Card Label="Produtos Cadastrados" Value="1,247" Stats={8} />
        <Card Label="Pedidos Este Mês" Value="187" Stats={23} />
        <Card Label="Receita Total" Value="45.231" Stats={15} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Resume title={"Últimos Pedidos"}>
          <ResumeContent
            itemID={1}
            clientName="Maria Silva"
            status="Pago"
            total="R$350,00"
          />
          <ResumeContent
            itemID={1}
            clientName="Maria Silva"
            status="Pago"
            total="R$350,00"
          />
          <ResumeContent
            itemID={1}
            clientName="Maria Silva"
            status="Pago"
            total="R$350,00"
          />
          <ResumeContent
            itemID={1}
            clientName="Maria Silva"
            status="Pago"
            total="R$350,00"
          />
        </Resume>
        <Resume title={"Produtos em Baixo Estoque"}>
          <ProductResume
            productName="Camiseta Básica"
            sku="CAM-1234"
            unitsLeft={1}
            alertThreshold={10}
          />
          <ProductResume
            productName="Camiseta Básica"
            sku="CAM-1234"
            unitsLeft={1}
            alertThreshold={10}
          />
          <ProductResume
            productName="Camiseta Básica"
            sku="CAM-1234"
            unitsLeft={1}
            alertThreshold={10}
          />
          <ProductResume
            productName="Camiseta Básica"
            sku="CAM-1234"
            unitsLeft={1}
            alertThreshold={10}
          />
        </Resume>
      </div>
    </div>
  );
}
