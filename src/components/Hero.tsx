import { motion } from "framer-motion";

const Hero = () => (
  <section
    className="relative h-screen bg-cover bg-center flex items-center"
    style={{ backgroundImage: "url('/img1.jpg')" }}
  >
    <div className="absolute inset-0 bg-black opacity-40" />

    <div className="relative z-10 text-white px-6 md:px-16 max-w-xl">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        LIMPIEZA <br /> COMERCIAL <br /> CONFIABLE
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-8"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Somos la empresa de pulidos <br /> y pisos #1 en Costa Rica.
      </motion.p>

      <motion.a
        href="#contacto"
        className="inline-block bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Consulta por nuestros servicios
      </motion.a>
    </div>

  </section>
);

export default Hero;
