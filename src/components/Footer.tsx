import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-blue-800 text-blue-900 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold"> </div>  {/* Logo */}
            <div>
              <h2 className="text-xl font-semibold">Limpieza Experta</h2>
              <p className="text-sm">Pulido y limpieza de pisos</p>
            </div>
          </div>
        </div>

        {/* Enlaces de navegación */}
        <div className="grid grid-cols-2 pr-16 gap-16">
          <div className="space-y-2">
            <p className="font-medium">Redes sociales</p>
            <ul className="space-y-1">
              <li><a href="https://www.facebook.com/limpieza.experta" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Horario</p>
            <ul className="space-y-1">
              <li className="whitespace-nowrap">Lunes a Viernes: 8:00 am - 5:00 pm</li>
              <li className="whitespace-nowrap">Sábados: 8:00 pm - 3:00 pm</li>
              <li className="whitespace-nowrap">Domingos: 9:00 pm - 3:00 pm</li>
            </ul>
          </div>
        </div>

        {/* Contacto y botón */}
        <div className="flex flex-col items-start pl-16 gap-2">
          <div className="space-y-2">
            <p><strong>Teléfono:</strong> +506 8953 3113</p>
            <p><strong>Email:</strong> limpiezaexperta@gmail.com</p>
            <p>Realizamos servicios en todo el país!</p>
          </div>
          <button className="bg-blue-900 text-white px-4 py-2 hover:bg-blue-800 transition">
            Consulta por nuestros servicios
          </button>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-200 py-4 px-6 text-center text-xs text-gray-600">
        <p>Política de privacidad</p>
        <p>© 2025 Creado por Limpieza Experta</p>
      </div>
    </footer>
  );
};

export default Footer;
