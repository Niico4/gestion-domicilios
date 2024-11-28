'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import React, { FC } from 'react';
import { IconPlus } from '@tabler/icons-react';

import { Order } from '@/app/interfaces/orders/order';

import FormNewOrder from '../components/FormNewOrder';

const ModalNewOrder: FC<{
  addOrder: (newOrder: Order) => void;
}> = ({ addOrder }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        startContent={<IconPlus />}
        color="secondary"
        className="bg-primary-gradient font-semibold text-lg tracking-wider"
      >
        Crear Domicilio
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
                Agrega una nueva orden
              </ModalHeader>
              <ModalBody>
                <FormNewOrder onClose={onClose} addOrder={addOrder} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalNewOrder;
