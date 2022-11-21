import Product from "../components/Product";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";

export default function Home() {
  const { actualCategory } = useQuiosco();
  return (
    <Layout page={`Menú ${actualCategory?.name}`}>
      <h1 className="text-4xl font-black ">{actualCategory?.name}</h1>
      <p className="text-2xl my-10">
        Elije y personaliza tu pedido a continuación
      </p>
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {actualCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}
