import { motion, type Variants } from "framer-motion";
import { cardsData } from "../../../data/Cards";
import { AboutCard } from "../../ui/Cards/Cards";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

// Variantes para o título e cards
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function About() {
  return (
    <section id="como-funciona" className="bg-[#F9FAFB] py-20 px-4 md:px-8 overflow-hidden">
      {/* Título animado ao entrar no scroll */}
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
          Como funciona
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
          Simples, rápido e{" "}
          <span className="text-orange-500">pertinho de você</span>
        </h2>
      </motion.div>

      {/* Grid de Cards */}
      <motion.ul 
        className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 w-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
      >
        {cardsData.map((card) => (
          <motion.div key={card.id} variants={itemVariants}>
            <AboutCard
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </motion.div>
        ))}
      </motion.ul>
    </section>
  );
}