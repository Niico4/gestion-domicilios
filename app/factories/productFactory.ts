import { Product } from '../interfaces/products/products';

export const ProductFactory = {
  createNewProduct: (): Product => ({
    id: '',
    nameProduct: '',
    price: 0,
    quantity: 0,
    inStock: true,
  }),
};
