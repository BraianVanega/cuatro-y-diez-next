import {
  Productos,
  Header,
  MovingImages,
  Footer,
  Libro,
  QuienesSomos,
  ContactForm,
} from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-blue-100">
      <Header />
      <main className="pt-52">
        <MovingImages />
        <Productos />
        <Libro />
        <QuienesSomos />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
