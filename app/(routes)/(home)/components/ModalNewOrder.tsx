'use client';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import React from 'react';
import { IconPlus } from '@tabler/icons-react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import FormNewOrder from '@/app/(routes)/(home)/components/FormNewOrder';

import { NewOrderType } from '../constants/validation/newOrderSchema';

const ModalNewOrder = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { reset } = useForm();

  const onSubmit = (data: NewOrderType) => {
    console.log('Datos de la orden', data);
    try {
      const response = {
        ...data,
      };

      console.log('Datos enviados', response);
      toast.success('Orden agregada correctamente');

      onClose();
      reset();
    } catch (error) {
      console.error(error);
      toast.error('No se pudo agregar la orden');
    }
  };

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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Agrega una nueva orden
              </ModalHeader>
              <ModalBody>
                <FormNewOrder onSubmit={onSubmit} onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalNewOrder;
