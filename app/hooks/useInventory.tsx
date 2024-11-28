import { useEffect, useState } from 'react';

import { inventoryMock } from '../mock/inventoryMock';
import { Product } from '../interfaces/products/products';

export const useInventory = () => {
  const updateLocalStorage = (updatedProducts: Product[]) => {
    localStorage.setItem('domisys_inventory', JSON.stringify(updatedProducts));
  };

  const [inventory, setInventory] = useState<Product[]>(() => {
    try {
      const storedProducts = localStorage.getItem('domisys_inventory');
      return storedProducts ? JSON.parse(storedProducts) : inventoryMock;
    } catch (e) {
      console.error('Error al leer de localStorage', e);
      return inventoryMock;
    }
  });

  useEffect(() => {
    updateLocalStorage(inventory);
  }, [inventory]);

  const addProduct = (newProduct: Product) => {
    setInventory((prevProduct) => {
      const updatedProduct = [...prevProduct, newProduct];
      updateLocalStorage(updatedProduct);
      return updatedProduct;
    });
  };

  const editProduct = (updatedProduct: Product) => {
    setInventory((prevInventory) => {
      const updatedInventory = prevInventory.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product,
      );
      updateLocalStorage(updatedInventory);
      return updatedInventory;
    });
  };

  const deleteProduct = (productId: string) => {
    const confirmed = window.confirm(
      '¿Estás seguro de eliminar este producto?',
    );
    if (!confirmed) return;

    setInventory((prevInventory) => {
      const updatedInventory = prevInventory.filter(
        (product) => product.id !== productId,
      );
      updateLocalStorage(updatedInventory);
      return updatedInventory;
    });
  };

  return {
    inventory,
    addProduct,
    editProduct,
    deleteProduct,
  };
};
