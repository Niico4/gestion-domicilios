'use client';

import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';

interface ModalFormProps<T> {
  triggerText: string;
  modalTitle: string;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
}

const ModalForm = <T,>({
  triggerText,
  modalTitle,
  onSubmit,
  children,
}: ModalFormProps<T>) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="secondary"
        className="bg-primary-gradient font-semibold text-lg tracking-wider"
      >
        {triggerText}
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>
                {React.cloneElement(children as React.ReactElement, {
                  onClose,
                  onSubmit,
                })}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalForm;
