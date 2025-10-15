import Image from "next/image";

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 py-20 px-4 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="md:w-1/2">
          <Image
            src="/images/nosotros.jpeg"
            alt="Quiénes somos Cuatro y 10"
            className="rounded-2xl shadow-lg"
            width={600}
            height={600}
            objectFit="cover"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Quiénes somos
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-blue-900">
            <p className="mb-4 leading-relaxed">
              Cuatro amigos, un alambique y la curiosidad de crear algo
              distinto. Así nació <strong>Cuatro y 10</strong>, nuestro gin
              artesanal suave, equilibrado y aromático, elaborado con diez
              botánicos cuidadosamente seleccionados.
            </p>
            <p className="mb-4 leading-relaxed">
              Lo que empezó como un hobby se convirtió en un proyecto lleno de
              pasión y dedicación. Cada botella refleja nuestro amor por el
              detalle y el placer de compartir momentos especiales.
            </p>
            <p className="mb-2 font-semibold text-blue-800">
              Cuatro amigos. Diez botánicos. Un gin para compartir.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="w-96 h-96 bg-blue-200 rounded-full opacity-30 absolute -top-32 -left-32"></div>
        <div className="w-72 h-72 bg-yellow-200 rounded-full opacity-20 absolute -bottom-32 -right-24"></div>
      </div> */}
    </section>
  );
}
