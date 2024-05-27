"use client";
import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Privacity() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState<
    "inside" | "normal" | "outside" | undefined
  >("inside");

  const openModalOnEnter = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter") {
      onOpen();
    }
  };

  return (
    <>
      <a
        tabIndex={0}
        className="bg-transparent hover:opacity-75 cursor-pointer"
        onClick={onOpen}
        onKeyDown={openModalOnEnter}
      >
        Términos y condiciones.
      </a>
      <Modal
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Términos y condiciones</ModalHeader>
              <ModalBody>
                <p>
                  <span className="font-bold text-center">
                    Política de Privacidad de Fuddy
                  </span>
                  <br />
                  Fecha de última actualización: [16-09-2023]
                  <br />
                  <br />
                  1. Introducción
                  <br /> Bienvenido a{" "}
                  <span className="text-[#74C28A] font-nunito font-bold">
                    Fuddy.
                  </span>{" "}
                  En esta Política de Privacidad, explicamos cómo recopilamos,
                  utilizamos y protegemos la información personal que usted
                  proporciona cuando utiliza nuestra aplicación móvil y
                  plataforma web (Servicios). Su privacidad es importante para
                  nosotros, y nos comprometemos a proteger su información
                  personal de acuerdo con las leyes aplicables de protección de
                  datos.
                  <br />
                  <br />
                  2. Información que Recopilamos
                  <br />
                  <br />
                  2.1 Información Personal: Cuando se registra en Fuddy o
                  utiliza nuestros Servicios, podemos recopilar información
                  personal como su nombre, dirección de correo electrónico,
                  información de contacto, información demográfica y otra
                  información que usted elija proporcionar voluntariamente.
                  <br />
                  <br />
                  2.2 Información de Uso: Recopilamos información sobre cómo
                  utiliza nuestros Servicios, incluyendo las recetas que busca,
                  las recetas que guarda, las interacciones en la comunidad y
                  otra información relacionada con su uso de la aplicación.
                  <br />
                  <br /> 2.3 Información de Dispositivos: Podemos recopilar
                  información sobre su dispositivo, incluyendo el modelo,
                  sistema operativo, dirección IP y otros datos técnicos para
                  mejorar la calidad de nuestros Servicios y brindar soporte
                  técnico.
                  <br />
                  <br /> 3. Uso de la Información
                  <br />
                  <br /> 3.1 Propósito: Utilizamos la información recopilada
                  para proporcionar y mejorar nuestros Servicios, personalizar
                  su experiencia, comunicarnos con usted, responder a sus
                  consultas, enviar actualizaciones y mantener la seguridad de
                  la aplicación.
                  <br />
                  <br /> 3.2 Publicidad: Podemos utilizar información no
                  identificable personalmente para personalizar la publicidad
                  que ve en la aplicación.
                  <br />
                  <br />
                  4. Compartir Información
                  <br />
                  <br />
                  4.1 Proveedores de Servicios: Podemos compartir su información
                  con terceros que prestan servicios en nuestro nombre, como
                  alojamiento de servidores, análisis de datos y servicios de
                  marketing.
                  <br />
                  <br /> 4.2 Colaboradores y Usuarios: Al utilizar funciones
                  sociales en la aplicación, como la comunidad, su nombre de
                  usuario y actividad relacionada con la comunidad pueden ser
                  visibles para otros usuarios.
                  <br />
                  <br />
                  4.3 Requisitos Legales: Podemos divulgar su información si así
                  lo exige la ley, una orden judicial o para proteger nuestros
                  derechos legales.
                  <br />
                  <br /> 5. Seguridad de Datos: Tomamos medidas razonables para
                  proteger su información personal contra el acceso no
                  autorizado o la divulgación. Sin embargo, no podemos
                  garantizar la seguridad absoluta de la información en línea.
                  <br />
                  <br /> 6. Cambios en la Política de Privacidad: Podemos
                  actualizar esta Política de Privacidad de vez en cuando. Le
                  notificaremos sobre cambios significativos en nuestra página
                  web o a través de notificaciones en la aplicación.
                  <br />
                  <br /> 7. Sus Derechos y Elecciones: Puede ejercer sus
                  derechos de acceso, rectificación, supresión y oposición en
                  relación con sus datos personales. Para hacerlo, póngase en
                  contacto con nuestro equipo de soporte.
                  <br />
                  <br />
                  8. Contacto: Si tiene preguntas o inquietudes sobre esta
                  Política de Privacidad o sobre cómo manejamos su información
                  personal, puede ponerse en contacto con nosotros a través de:{" "}
                  <br />
                  <span className="font-bold">team@fuddy.click</span>
                  <br />
                  <br />
                  9. Consentimiento: Al utilizar nuestros Servicios, usted
                  acepta y consiente nuestra recopilación, uso y divulgación de
                  su información personal de acuerdo con esta Política de
                  Privacidad.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#90FFAF] hover:bg-[#6DB481] hover:text-white"
                  onPress={onClose}
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
