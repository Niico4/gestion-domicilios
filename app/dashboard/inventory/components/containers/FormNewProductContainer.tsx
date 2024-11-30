import React, { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { newProductSchema } from '@/app/validations/newProductSchema';
import { Product } from '@/app/interfaces/products/products';
import { ProductFactory } from '@/app/factories/productFactory';
import { ProductsRepository } from '@/app/repositories/productsRepository';

import FormNewProduct from '../presentation/FormNewProduct';

const FormNewProductContainer: FC<{
  addProduct: (newProduct: Product) => void;
  onClose: () => void;
}> = ({ addProduct, onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newProductSchema),
    defaultValues: ProductFactory.createNewProduct(),
  });

  const onSubmit = async (data: Product) => {
    try {
      const newProduct = await ProductsRepository.createProduct(data);
      addProduct(newProduct);

      toast.success('Producto agregado correctamente');
    } catch (error) {
      console.error(error);
      toast.error('No se pudo agregar el producto');
    } finally {
      onClose();
      reset();
    }
  };
  return (
    <FormNewProduct
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      setValue={setValue}
      watch={watch}
      onClose={onClose}
    />
  );
};

export default FormNewProductContainer;
