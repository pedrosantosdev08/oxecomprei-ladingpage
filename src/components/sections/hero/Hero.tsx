import {
  faLocationDot,
  faShoppingBasket,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  HeroImage  from "../../../assets/hero-image.png"
 
export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8  bg-linear-[45deg,white_80%,var(--color-orange)_140%] bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Lado Esquerdo: Conteúdo */}
        <div className="flex flex-col items-start text-left">
          {/* Badge Superior */}
          <div className="bg-[#FFF5EE] border border-[#FFD8C0] rounded-full px-4 py-1 mb-6 flex items-center gap-2">
            <FontAwesomeIcon
              className="text-orange-highlight text-sm animate-bounce"
              icon={faLocationDot}
            />
            <span className="text-orange-highlight text-sm font-medium">
              Quem está perto, aparece mais
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl lg:text-7xl font-black text-[#1A1A1A] leading-[1.1] mb-6">
            Descubra as <br />
            <span
              className="bg-linear-to-r 
              to-orange-600 to-90% 
              via-orange-500 via-50% 
              from-orange-400 from-10% 
  bg-clip-text text-transparent"
            >
              melhores lojas
            </span>{" "}
            <br />
            do seu bairro
          </h1>

          {/* Descrição */}
          <p className="text-gray-500 text-lg lg:text-xl max-w-lg mb-10 leading-relaxed">
            O <span className="font-bold text-gray-900">Oxê Comprei!</span>{" "}
            conecta você ao comércio local usando geolocalização. Encontre
            produtos incríveis pertinho de casa.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-highlight hover:bg-[#D48806] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-orange-200">
              <FontAwesomeIcon icon={faShoppingBasket} />
              Quero Comprar
            </button>

            <button className="bg-white border-2 border-orange-highlight text-orange-highlight hover:bg-orange-50 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all">
              Sou Lojista
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </button>
          </div>
        </div>

        {/* Lado Direito: Imagem Ilustrativa */}
        <div className="relative flex justify-center items-center">
          {/* Sombra suave de fundo */}
          <div className="absolute inset-0 bg-orange-100 blur-3xl opacity-30 rounded-full"></div>

          <div className="relative bg-white rounded-[40px] shadow-2xl border border-gray-100">
            <img
              className="w-full h-full rounded-[30px] object-cover shadow-lg shadow-orange-500/50"
              src={HeroImage}
              alt="Ilustração do App Oxê Comprei"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
