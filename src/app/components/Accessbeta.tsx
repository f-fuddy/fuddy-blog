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

export default function AccessBeta() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleActionClick = () => {
    window.open("https://www.fuddy.click/#newsletter", "_blank");
  };
  return (
    <>
      <Button
        onPress={onOpen}
        className="bg-[#90FFAF] hover:bg-[#005F04]  py-4 px-8 text-lg text-[#005F04]  rounded-full transition hover:text-[#81DD9B] "
      >
        Unirse
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Muy pronto😉
              </ModalHeader>
              <ModalBody>
                <p>
                  Subscríbete a la newsletter y obtén el acceso anticipado a la
                  APP
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar😶
                </Button>
                <Button color="success" onPress={handleActionClick}>
                  Ir ya👀
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
