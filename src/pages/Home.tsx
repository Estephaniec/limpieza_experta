import Layout from "../layout/Layout";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Home = () => (
  <Layout>
    {/* Hero con fondo y botón destacado */}

    <Hero></Hero>
    {/* Sección Nosotros */}
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Sobre Nosotros</h2>
      <p className="max-w-3xl mx-auto text-gray-600">
        Empresa dedicada a pulidos de pisos tipo mármol, terrazo, mosaico, trabajamos el acabado en pisos de concreto y madera lavado de muebles y alfombras.
      </p>
      <Link to="/nosotros" className="inline-block mt-6 text-blue-600 font-medium hover:underline">
        Conocé más sobre nosotros
      </Link>
    </section>

    {/* Servicios destacados */}
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { title: "Limpieza profunda", icon: "" },
          { title: "Pulido y sellado", icon: "" },
          { title: "Otro", icon: "" },
        ].map((s, i) => (
          <Link
            key={i}
            to="/servicios"
            className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition group"
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 group-hover:text-blue-900 transition">{s.title}</h3>
          </Link>
        ))}
      </div>
    </section>

    {/* Productos destacados */}
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Desengrasante Pro", "Limpiador Multiusos", "Sellador Premium"].map((p, i) => (
          <Link
            key={i}
            to="/productos"
            className="border rounded-lg p-6 hover:shadow-md transition group"
          >
            <h3 className="text-lg font-medium text-blue-700 group-hover:text-blue-900">{p}</h3>
            <p className="text-gray-600 mt-2">Descripción corta del producto.</p>
          </Link>
        ))}
      </div>
    </section>

    {/* CTA final */}
    <section className="py-20 bg-blue-600 text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-4">Revisá alguno de nuestros trabajos.</h2>
      <p className="mb-6">Muchos nos prefieren por nuestra calidad.</p>
      <Link
        to="/services"
        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Servicios
      </Link>
    </section>
  </Layout>
);

export default Home;
