import { SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
    return (
    <footer className="bg-blue-900 text-white py-10 px-6 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Nombre */}
        <div>
            <h2 className="text-xl font-bold text-white">Cuatro y 10</h2>
            <p className="text-sm mt-2 text-neutral-400">
                Hecho por amigos, pensado para vos.
            </p>
            </div>

            {/* Links */}
            <div>
                <h3 className="text-white font-semibold mb-3">Navegación</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="/" className="hover:underline hover:underline-offset-4">Inicio</a></li>
                    <li><a href="#quienes-somos" className="hover:underline hover:underline-offset-4">Nosotros</a></li>
                    <li><a href="/contacto" className="hover:underline hover:underline-offset-4">Contacto</a></li>
                    </ul>
                    </div>
                    {/* Redes sociales */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Seguinos</h3>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/people/Cuatro-y-10-Gin/61560809742664/?rdid=ZZ6IiIcQKvtKlBQP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F179AyJujQs%2F" aria-label="Facebook" className="hover:text-white">
                            <SiFacebook size={22} />
                            </a>
                            <a href="https://www.instagram.com/cuatroy10gin/?igsh=dGo4aW10dHZtaDNw#" aria-label="Instagram" className="hover:text-white">
                            <SiInstagram size={22} />
                            </a>
                            </div>
                            </div>
                            </div>
                            
                            <div className="border-t border-gray-400 mt-10 pt-6 text-center text-white">
                                © {new Date().getFullYear()} Cuatro y 10. Todos los derechos reservados.
                                </div>
    </footer>
);
}
