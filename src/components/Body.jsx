export default function Body() {
    return (
        <section id="productos" className="max-2-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Productos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Primer producto*/}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img 
                    src="/images/fondo.jpeg" 
                    alt="Botella" 
                    className="w-full h-64 object-contain"
                    />
                    <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold">Botella de 750cc</h3>
                        <p className="text-gray-600 mt-2">$15.000</p>
                        </div>
                    </div>
                    {/*Segundo producto*/}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img 
                        src="/images/caja.jpg" 
                        alt="Caja mas copa" 
                        className="w-full h-64 object-contain"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold">Caja de madera más copa</h3>
                            <p className="text-gray-600 mt-2">$40.000</p>

                        </div>

                    </div>

            </div>

        </section>
    )
}