import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

export function CallToAction() {
  return (
    <section className="w-screen mb-20">
      <motion.div
        initial={{ opacity: 0, x: 10, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-linear-to-r from-orange-highlight to-orange mx-4 sm:mx-auto rounded-3xl p-8 md:p-16 text-center flex flex-col items-center gap-8 w-[calc(100%-2rem)] max-w-7xl"
      >
        
        <h2 className="text-white font-bold text-3xl md:text-5xl leading-tight">
          Bora colocar seu bairro <br className="hidden md:block" /> no mapa? 🗺️
        </h2>

       
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white opacity-90">
          Junte-se a centenas de lojistas que já estão vendendo mais com o Oxê
          Comprei! Cadastro gratuito e sem compromisso.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="bg-white text-orange-highlight font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg">
            Cadastrar minha loja <FontAwesomeIcon icon={faArrowRight} />
          </button>
          
          <button className="bg-transparent border-2 rounded-xl border-white text-white font-bold py-4 px-8 hover:bg-white hover:text-orange transition-all">
            Saber mais
          </button>
        </div>
      </motion.div>
    </section>
  );
}