import { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonPrimary } from "../../ui/buttonPrimary/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-[#FEF7E6] h-20 flex items-center">
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="shrink-0 cursor-pointer z-50">
          <p className="text-2xl font-black tracking-tight text-[#1A1A1A]">
            <span className="text-[#F39C12]">Oxê</span>Comprei!
          </p>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li>
              <a href="#como-funciona" className="text-gray-600 font-medium hover:text-[#F39C12] transition-colors">
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#para-lojistas" className="text-gray-600 font-medium hover:text-[#F39C12] transition-colors">
                Para Lojistas
              </a>
            </li>
            <li>
              <ButtonPrimary title="Começar Agora" />
            </li>
          </ul>
        </nav>

        {/* Botão Hambúrguer */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-2xl text-[#F39C12] z-50 p-2"
          aria-label="Abrir menu"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>

        {/* Menu Mobile (Overlay) */}
        <div className={`
          fixed inset-0 bg-white transition-transform duration-300 ease-in-out transform z-40
          flex flex-col items-center justify-center lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          <nav>
            <ul className="flex flex-col items-center gap-8">
              <li>
                <a 
                  href="#como-funciona" 
                  onClick={toggleMenu}
                  className="text-orange-highlight text-2xl font-bold hover:opacity-80 transition-opacity"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a 
                  href="#para-lojistas" 
                  onClick={toggleMenu}
                  className="text-orange-highlight text-2xl font-bold hover:opacity-80 transition-opacity"
                >
                  Para Lojistas
                </a>
              </li>
              <li className="mt-4">
                {/* Versão do botão para fundo laranja */}
                <div onClick={toggleMenu}>
                   <ButtonPrimary title="Começar Agora" />
                </div>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
}