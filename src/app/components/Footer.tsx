import Image from "next/image";
import { sections, socials } from "../constants";
import LegalModal from "./LegalModal";

function Footer() {
  return (
    <footer className="bg-[#FFFC9F]  px-4 md:px-6 xl:px-20 max-w-[90rem] mx-auto py-10 lg:py-14 text-sm">
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="space-y-4">
          <Image src="/logo.png" width={128} height={40} alt="Fuddy logo" />
          <p>
            En busca de una comunidad ambientalmente consciente y
            nutricionalmente educada.
          </p>
          <p className="sr-only">
            Puedes encontrarnos en las siguientes redes sociales:
          </p>
          <ul className="flex gap-4">
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.Icon
                    title={social.name}
                    className="hover:text-[#6DB481]"
                    size={24}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-base font-bold">Más sobre Fuddy</p>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.name}>
                <a target="_blank" href={section.href}>
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-base font-bold">Legal</p>
          <LegalModal />
        </div>
      </div>

      <p className="mt-4 lg:mt-12 lg:text-center">
        Todos los derechos reservados 2023 © Fuddy
      </p>
    </footer>
  );
}

export default Footer;
