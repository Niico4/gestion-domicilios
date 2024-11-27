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

import { NewProductType } from '@/app/validations/newProductSchema';

import FormNewProduct from './FormNewProduct';

const ModalNewProduct = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { reset } = useForm();

  const onSubmit = (data: NewProductType) => {
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
        Agregar Producto
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Agrega un nuevo producto
              </ModalHeader>
              <ModalBody>
                <FormNewProduct onSubmit={onSubmit} onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalNewProduct;
