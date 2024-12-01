import { Product } from '../interfaces/products/products';
import { generateProductID } from '../utils/generateID';
import { inventoryMock } from '../mock/inventoryMock';

const loadProductsFromLocalStorage = (): Product[] => {
  if (typeof window === 'undefined') return [];
  const storedProducts = localStorage.getItem('products');
  return storedProducts ? JSON.parse(storedProducts) : [];
};

const saveProductsToLocalStorage = (products: Product[]): void => {
  localStorage.setItem('products', JSON.stringify(products));
};

export const ProductsRepository = {
  getProducts: async (): Promise<Product[]> => {
    const localProducts = loadProductsFromLocalStorage();

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(localProducts.length > 0 ? localProducts : inventoryMock);
      }, 500);
    });
  },

  createProduct: async (product: Product): Promise<Product> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newProduct = { ...product, id: generateProductID() };
        const updatedProducts = [...loadProductsFromLocalStorage(), newProduct];
        saveProductsToLocalStorage(updatedProducts);
        resolve(newProduct);
      }, 500);
    });
  },

  updateProduct: async (product: Product): Promise<Product> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedProducts = loadProductsFromLocalStorage();
        const updatedProducts = storedProducts.map((item) =>
          item.id === product.id ? product : item,
        );
        saveProductsToLocalStorage(updatedProducts);
        resolve(product);
      }, 500);
    });
  },

  deleteProduct: async (productId: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedProducts = loadProductsFromLocalStorage();
        const updatedProducts = storedProducts.filter(
          (item) => item.id !== productId,
        );
        saveProductsToLocalStorage(updatedProducts);
        resolve();
      }, 500);
    });
  },
};
