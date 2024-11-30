import { create } from 'zustand';

import { ProductsRepository } from '../repositories/productsRepository';
import { Product } from '../interfaces/products/products';

type InventoryStore = {
  products: Product[];
  isLoading: boolean;

  getProducts: () => Promise<void>;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
};

export const useInventoryStore = create<InventoryStore>((set) => ({
  products: [],
  isLoading: false,

  getProducts: async () => {
    set({ isLoading: true });
    try {
      const products = await ProductsRepository.getProducts();
      set({ products, isLoading: false });
    } catch (error) {
      console.error('Error al obtener productos:', error);
      set({ isLoading: false });
    }
  },

  addProduct: (newProduct) => {
    set((state) => {
      const updatedProducts = [...state.products, newProduct];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    });
  },

  updateProduct: (updatedProduct) => {
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      );
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    });
  },

  deleteProduct: (productId) => {
    window.alert('¿Seguro que desea eliminar el producto?');
    set((state) => {
      const updatedProducts = state.products.filter(
        (product) => product.id !== productId,
      );
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    });
  },
}));
