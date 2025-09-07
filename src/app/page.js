import { Body, Header, MovingImages, Footer } from "@/components";
import QuienesSomos from "@/components/QuienesSomos";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-blue-100">
      <Header />
      <main>
      <MovingImages />
        <Body />
        <QuienesSomos/>
      </main>
      <Footer/>
    </div>
  );
}
