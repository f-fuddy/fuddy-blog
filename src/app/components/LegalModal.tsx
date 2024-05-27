"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

function LegalModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen} type="button">
        Términos y condiciones
      </button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        hideCloseButton={true}
      >
        <ModalContent className="w-full max-w-xl p-2">
          <ModalHeader className="text-xl font-bold">
            Términos y condiciones
          </ModalHeader>

          <ModalBody>
            <p className="font-medium">Política de Privacidad de Fuddy</p>
            <p>Fecha de última actualización: [16-09-2023]</p>
            <p>1. Introducción</p>
            <p>
              Bienvenido a<strong className="text-brand"> Fuddy. </strong>
              En esta Política de Privacidad, explicamos cómo recopilamos,
              utilizamos y protegemos la información personal que usted
              proporciona cuando utiliza nuestra aplicación móvil y plataforma
              web (Servicios). Su privacidad es importante para nosotros, y nos
              comprometemos a proteger su información personal de acuerdo con
              las leyes aplicables de protección de datos.
            </p>
            <p>2. Información que Recopilamos</p>
            <p>
              2.1 Información Personal: Cuando se registra en Fuddy o utiliza
              nuestros Servicios, podemos recopilar información personal como su
              nombre, dirección de correo electrónico, información de contacto,
              información demográfica y otra información que usted elija
              proporcionar voluntariamente.
            </p>
            <p>
              2.2 Información de Uso: Recopilamos información sobre cómo utiliza
              nuestros Servicios, incluyendo las recetas que busca, las recetas
              que guarda, las interacciones en la comunidad y otra información
              relacionada con su uso de la aplicación.
            </p>
            <p>
              2.3 Información de Dispositivos: Podemos recopilar información
              sobre su dispositivo, incluyendo el modelo, sistema operativo,
              dirección IP y otros datos técnicos para mejorar la calidad de
              nuestros Servicios y brindar soporte técnico.
            </p>
            <p>3. Uso de la Información</p>
            <p>
              3.1 Propósito: Utilizamos la información recopilada para
              proporcionar y mejorar nuestros Servicios, personalizar su
              experiencia, comunicarnos con usted, responder a sus consultas,
              enviar actualizaciones y mantener la seguridad de la aplicación.
            </p>
            <p>
              3.2 Publicidad: Podemos utilizar información no identificable
              personalmente para personalizar la publicidad que ve en la
              aplicación.
            </p>
            <p>4. Compartir Información</p>
            <p>
              4.1 Proveedores de Servicios: Podemos compartir su información con
              terceros que prestan servicios en nuestro nombre, como alojamiento
              de servidores, análisis de datos y servicios de marketing.
            </p>
            <p>
              4.2 Colaboradores y Usuarios: Al utilizar funciones sociales en la
              aplicación, como la comunidad, su nombre de usuario y actividad
              relacionada con la comunidad pueden ser visibles para otros
              usuarios.
            </p>
            <p>
              4.3 Requisitos Legales: Podemos divulgar su información si así lo
              exige la ley, una orden judicial o para proteger nuestros derechos
              legales.
            </p>
            <p>
              5. Seguridad de Datos: Tomamos medidas razonables para proteger su
              información personal contra el acceso no autorizado o la
              divulgación. Sin embargo, no podemos garantizar la seguridad
              absoluta de la información en línea.
            </p>
            <p>
              6. Cambios en la Política de Privacidad: Podemos actualizar esta
              Política de Privacidad de vez en cuando. Le notificaremos sobre
              cambios significativos en nuestra página web o a través de
              notificaciones en la aplicación.
            </p>
            <p>
              7. Sus Derechos y Elecciones: Puede ejercer sus derechos de
              acceso, rectificación, supresión y oposición en relación con sus
              datos personales. Para hacerlo, póngase en contacto con nuestro
              equipo de soporte.
            </p>
            <p>
              8. Contacto: Si tiene preguntas o inquietudes sobre esta Política
              de Privacidad o sobre cómo manejamos su información personal,
              puede ponerse en contacto con nosotros a través de:{" "}
              <strong>team@fuddy.click</strong>
            </p>
            <p>
              9. Consentimiento: Al utilizar nuestros Servicios, usted acepta y
              consiente nuestra recopilación, uso y divulgación de su
              información personal de acuerdo con esta Política de Privacidad.
            </p>
          </ModalBody>

          <ModalFooter>
            <button
              type="button"
              className="flex gap-2 items-center justify-center py-4 px-8 bg-primary-200 hover:bg-brand rounded-full text-center text-brand hover:text-white tracking-wide transition lg:text-lg font-medium text-sm"
              onClick={onClose}
            >
              ¡Entendido!
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LegalModal;
