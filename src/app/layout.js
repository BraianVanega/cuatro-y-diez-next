import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gin Cuatro y 10 | London Dry Gin Artesanal",
  description: "Gin Cuatro y 10 — London Dry Gin artesanal elaborado en pequeños lotes en Mar del Plata. Sabor equilibrado, botánicos seleccionados y producción local.",

  
  keywords: [
    "gin cuatro y 10",
    "cuatro y 10 gin",
    "gin artesanal",
    "gin mar del plata",
    "london dry gin",
    "ginebra artesanal",
    "gin argentino",
    "cuatro y diez gin"
  ],

  metadataBase: new URL("https://cuatro-y-10-next.vercel.app"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph:{
    title: "Gin Cuatro y 10 | London Dry Gin Artesanal",
    description: "Cuatro y 10 — Gin artesanal producido en Mar del Plata. Un London Dry Gin con identidad propia.",
    url: "https://cuatro-y-10-next.vercel.app",
    siteName:"Gin Cuatro y 10",
    images:[
      {
        url: "/images/cuatroy10.png",
        width: 600,
        height: 600,
        alt: "Logo Cuatro y 10",
      }
    ],
    locale: "es_AR",
    type: "website",
},

verification: {
  google: "ZBg0MsV1gNceF6izvCSy47QHFogwfN5i2pJA_hirzw8",
},

};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
