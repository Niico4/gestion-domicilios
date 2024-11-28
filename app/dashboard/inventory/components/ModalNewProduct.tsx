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

import { Product } from '@/app/interfaces/products/products';

import FormNewProduct from './FormNewProduct';

const ModalNewProduct: FC<{
  addProduct: (newProduct: Product) => void;
}> = ({ addProduct }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                <FormNewProduct onClose={onClose} addProduct={addProduct} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalNewProduct;
