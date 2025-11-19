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

  icons: {
    icon: "/images/logo.png",
  },

  openGraph:{
    title: "Cuatro y 10",
    description: "#SomosCuatroy10",
    url: "https://cuatro-y-10-next.vercel.app/",
    siteName:"Cuatro y 10",
    images:[
      {
        url: "https://cuatro-y-10-next.vercel.app/images/cuatroy10.png",
        width: 600,
        height: 600,
        alt: "Logo Cuatro y 10",
      }
    ],
    locale: "es-AR",
    type: "website",
},

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
