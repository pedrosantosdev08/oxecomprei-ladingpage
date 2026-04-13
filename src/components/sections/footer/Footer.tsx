export function Footer(){
    return(
        <footer className="bg-[#0F1729]">
            <div className="flex items-center gap-4 p-8 justify-around">
                <h3 className="text-white font-extrabold text-2xl">Oxê Comprei!</h3>
                <nav>
                    <ul className="flex gap-3.5 text-1xl text-gray-500 ">
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Termos</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Privacidade</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Contato</a></li>
                    </ul>
                </nav>
                <p className="text-gray-500">Feito com 🧡 em no Nordeste</p>
            </div>
        </footer>
    )
}