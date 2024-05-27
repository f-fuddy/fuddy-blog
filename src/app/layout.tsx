import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "300" });

const image =
  "https://res.cloudinary.com/draig/image/upload/v1702086792/fuddy/aw68dduth0cqxvwoo7ho.png";
export const metadata = {
  title: "Fuddy blog | Nutrición, eco-sustentabilidad y más",
  description:
    "Nutrición, ambiente y sustentabilidad, en busca de una comunidad nutricionalmente educada y ambientalmente cosciente",
  keywords: [
    "Alimentación saludable",
    "Nutrición equilibrada",
    "Comida sana",
    "Dietas balanceadas",
    "Alimentos naturales",
    "Alimentación consciente",
    "Comer bien",
    "Recetas saludables",
    "Eco-friendly",
    "Sostenibilidad alimentaria",
    "Productos orgánicos",
    "Comida sin pesticidas",
    "Alimentos frescos",
    "Planificación de comidas",
    "Dietas vegetarianas",
    "Dietas veganas",
    "Dieta mediterránea",
    "Alimentación y salud",
    "Superalimentos",
    "Reducción de desperdicio de alimentos",
    "Alimentos frescos y locales",
    "Comer de manera responsable",
    "Nutrientes esenciales",
    "Alimentos sin gluten",
    "Alimentación basada en plantas",
    "Alimentos sin lactosa",
    "Dieta sin azúcar",
    "Planificación de menús",
    "Alimentos ricos en fibra",
    "Alimentos ricos en antioxidantes",
  ],
  alternates: {
    canonical: "https://blog.fuddy.click",
    languages: {
      "es-ES": "/es-ES",
    },
  },
  ogImage: image,
  images: [
    {
      url: image,
      width: 800,
      height: 600,
      alt: "Fuddy app",
      name: "Fuddy app",
    },
    {
      url: image,
      width: 1800,
      height: 1600,
      alt: "Fuddy app",
      name: "Fuddy app",
    },
  ],
  twitter: {
    card: "summary_large_image",
    title: "Fuddy app",
    description:
      "Nutrición, ambiente y sustentabilidad, en busca de una comunidad nutricionalmente educada y ambientalmente cosciente",
    images: [image],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  openGraph: {
    images: image,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
