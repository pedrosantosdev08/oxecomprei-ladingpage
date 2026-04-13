import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";


export function CallToAction() {
  return (
    <section className="w-screen mb-20">
      <motion.div
        initial={{ opacity: 0, x: 10, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-linear-to-r from-orange-highlight to-orange mx-4 sm:mx-auto rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6 w-[calc(100%-2rem)] max-w-7xl"
      >
        <h2 className="text-white font-bold text-5xl">
          Bora colocar seu bairro <br /> no mapa ? 🗺️
        </h2>
        <p className="mx-auto text-2xl text-white">
          Junte-se a centenas de lojistas que já estão vendendo mais com o Oxê
          Comprei! Cadastro gratuito e sem compromisso.
        </p>
        <div className="flex flex-row gap-2 ">
            <button className="bg-white text-orange-highlight font-bold py-3 px-6 rounded-lg  hover:bg-gray-200">
              Cadastrar minha loja <FontAwesomeIcon icon={faArrowRight} />
            </button>
          <button className="bg-transparent border-2 rounded-lg border-white text-white font-bold py-3 px-6 hover:bg-white hover:text-orange transition-all">
              Saber mais
            </button>
        </div>
      </motion.div>
    </section>
  );
}
