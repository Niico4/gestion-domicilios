import { Button, Checkbox, CheckboxGroup, Input } from '@nextui-org/react';
import React, { FC } from 'react';

import { FormNewItemFormProps } from '@/app/interfaces/formNewItem';
import { Product } from '@/app/interfaces/products/products';

const FormNewProduct: FC<FormNewItemFormProps<Product>> = ({
  register,
  errors,
  handleSubmit,
  onClose,
  onSubmit,
  setValue,
  watch,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Input
          type="text"
          label="Nombre del Producto"
          isRequired
          isInvalid={!!errors.nameProduct}
          errorMessage={errors.nameProduct?.message}
          {...register('nameProduct')}
        />
        <div className="flex gap-4">
          <Input
            type="number"
            label="Precio"
            isRequired
            isInvalid={!!errors.price}
            errorMessage={errors.price?.message}
            {...register('price', {
              setValueAs: (value) => Number(value),
            })}
          />
          <Input
            type="number"
            label="Cantidad Disponible"
            isRequired
            isInvalid={!!errors.quantity}
            errorMessage={errors.quantity?.message}
            {...register('quantity', {
              setValueAs: (value) => Number(value),
            })}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <CheckboxGroup
          label="¿En stock?"
          orientation="horizontal"
          color="secondary"
          value={watch('inStock') ? ['yes'] : []}
          onValueChange={(values) => {
            setValue('inStock', values.length > 0);
          }}
          isInvalid={!!errors.inStock}
          errorMessage={errors.inStock?.message}
          isRequired
        >
          <Checkbox value="yes">Sí</Checkbox>
        </CheckboxGroup>
      </div>

      <div className="flex items-center gap-4 justify-end">
        <Button color="danger" variant="flat" onPress={onClose}>
          Cancelar
        </Button>
        <Button color="primary" className="bg-primary-gradient" type="submit">
          Agregar Producto
        </Button>
      </div>
    </form>
  );
};

export default FormNewProduct;
