import { ButtonPrimary } from "../../ui/buttonPrimary/ButtonPrimary";

export function Header() {
  return (
    // Adicionado 'sticky top-0 z-50' para o menu acompanhar a rolagem
    <header className="sticky top-0 z-50 w-full flex items-center p-6 bg-white shadow-sm border-b border-[#FEF7E6] h-16">
      {/* Container para limitar a largura em telas grandes e centralizar o conteúdo */}
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0 cursor-pointer">
          <p className="text-2xl font-black tracking-tight text-[#1A1A1A]">
            <span className="text-[#F39C12]">Oxê</span>Comprei!
          </p>
        </div>

        {/* Navegação Principal */}
        <nav className="">
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="#como-funciona"
                className="text-gray-600 font-medium hover:text-[#F39C12] transition-colors duration-200"
              >
                Como Funciona
              </a>
            </li>
            <li>
              <a
                href="#para-lojistas"
                className="text-gray-600 font-medium hover:text-[#F39C12] transition-colors duration-200"
              >
                Para Lojistas
              </a>
            </li>
            <li>
              <ButtonPrimary title="Começar Agora" />
            </li>
          </ul>
        </nav>

        
        
      </div>
    </header>
  );
}
