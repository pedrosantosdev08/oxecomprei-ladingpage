import {
  faLocationDot,
  faShoppingBasket,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroImage from "../../../assets/hero-image.png";
import { ButtonPrimary, ButtonSecondary } from "../../ui/buttonPrimary/Button";
import { motion, type Variants } from "framer-motion"; // Ajustado para o import padrão do framer-motion

export function Hero() {
 
  const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-linear-[45deg,white_80%,var(--color-orange)_140%] bg-white py-12 lg:py-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo */}
        <motion.div 
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge Superior */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#FFF5EE] border border-[#FFD8C0] rounded-full px-4 py-1 mb-6 flex items-center gap-2"
          >
            <FontAwesomeIcon
              className="text-orange-highlight text-sm animate-bounce"
              icon={faLocationDot}
            />
            <span className="text-orange-highlight text-xs md:text-sm font-medium whitespace-nowrap">
              Quem está perto, aparece mais
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-[#1A1A1A] leading-[1.1] mb-6"
          >
            Descubra as <br className="hidden md:block" />
            <span
              className="bg-linear-to-r 
              to-orange-600 to-90% 
              via-orange-500 via-50% 
              from-orange-400 from-10% 
              bg-clip-text text-transparent"
            >
              melhores lojas
            </span>{" "}
            <br className="hidden md:block" />
            do seu bairro
          </motion.h1>

          {/* Descrição */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-500 text-base md:text-lg lg:text-xl max-w-lg mb-10 leading-relaxed"
          >
            O <span className="font-bold text-gray-900">Oxê Comprei!</span>{" "}
            conecta você ao comércio local usando geolocalização. Encontre
            produtos incríveis pertinho de casa.
          </motion.p>

          {/* Botões de Ação */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <ButtonPrimary
              icon={<FontAwesomeIcon icon={faShoppingBasket} />}
              title="Quero Comprar"
            />

            <ButtonSecondary
              icon={<FontAwesomeIcon icon={faArrowRight} className="text-sm" />}
              title="Sou Lojista"
            />
          </motion.div>
        </motion.div>

        {/* Lado Direito: Imagem com efeito Float */}
        <motion.div 
          className="relative flex justify-center items-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-orange-100 blur-3xl opacity-30 rounded-full"></div>

          {/* Efeito de flutuação infinita na imagem */}
          <motion.div 
            className="relative bg-white rounded-[40px] shadow-2xl border border-gray-100 max-w-[320px] md:max-w-md lg:max-w-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <img
              className="w-full h-auto rounded-[30px] object-cover shadow-lg shadow-orange-500/90"
              src={HeroImage}
              alt="Ilustração do App Oxê Comprei"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}