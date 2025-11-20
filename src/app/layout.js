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
  title: "Cuatro y 10",
  description: "#SomosCuatroy10",

  keywords: [
    "gin",
    "gin artesanal",
    "ginebra",
    "cuatro y 10",
    "gin cuatro y 10",
    "mejores gin",
    "gin de mar del plata"

  ],

  metadataBase: new URL("https://cuatro-y-10-next.vercel.app"),

  icons: {
    icon: "/images/logo.png",
  },

  openGraph:{
    title: "Cuatro y 10",
    description: "#SomosCuatroy10",
    url: "https://cuatro-y-10-next.vercel.app",
    siteName:"Cuatro y 10",
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

other: {
  "google-site-verification": "ZBg0MsV1gNceF6izvCSy47QHFogwfN5i2pJA_hirzw8",
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
