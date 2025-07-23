import Layout from "../layout/Layout";

const Products = () => {
  return (
    <Layout>
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Sobre Nosotros</h1>
        <p className="text-slate-700 text-lg leading-relaxed">
          Somos una empresa especializada en la limpieza y restauración profesional de pisos con más de 10 años de experiencia. Nuestro compromiso es ofrecer soluciones eficaces con productos certificados y personal capacitado.
        </p>
      </section>
    </Layout>
  );
};

export default Products;
