import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">Limpieza Experta</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          {[
            { to: "/", label: "Inicio" },            
            { to: "/services", label: "Servicios" },
            { to: "/products", label: "Productos" },
            { to: "/about", label: "Nosotros" },
            { to: "/contsc", label: "Contacto" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `
                inline-block transition duration-300 transform 
                hover:text-blue-800 hover:-translate-y-1
                ${isActive ? "text-blue-900 font-semibold underline" : ""}
              `
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="border-b border-blue-500 w-full" />
    </header>
  );
};

export default Navbar;
