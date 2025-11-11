import {
  Productos,
  Header,
  MovingImages,
  Footer,
  Libro,
  QuienesSomos,
  ContactForm,
  AgeVerificationPopup,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans bg-blue-100">
        <AgeVerificationPopup />
        <Header />
        <main className="pt-32 sm:pt-40 md:pt-52 flex-1">
          <MovingImages />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Productos />
            <Libro />
            <QuienesSomos />
            <ContactForm />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
