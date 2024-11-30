import { create } from 'zustand';

import { Order } from '../interfaces/orders/order';
import { OrdersRepository } from '../repositories/ordersRepository';

type OrderStore = {
  orders: Order[];
  isLoading: boolean;

  getOrders: () => Promise<void>;
  addOrder: (order: Order) => void;
  updateOrder: (order: Order) => void;
  deleteOrder: (orderId: string) => void;
};

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  isLoading: false,

  getOrders: async () => {
    set({ isLoading: true });
    try {
      const orders = await OrdersRepository.getOrders();
      set({ orders, isLoading: false });
    } catch (error) {
      console.error('Error al obtener órdenes:', error);
      set({ isLoading: false });
    }
  },

  addOrder: (newOrder) => {
    set((state) => {
      const updatedOrders = [...state.orders, newOrder];
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return { orders: updatedOrders };
    });
  },

  updateOrder: (updatedOrder) => {
    set((state) => {
      const updatedOrders = state.orders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order,
      );
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return { orders: updatedOrders };
    });
  },

  deleteOrder: (orderId) => {
    window.alert('¿Seguro que desea eliminar el domicilio?');
    set((state) => {
      const updatedOrders = state.orders.filter(
        (order) => order.id !== orderId,
      );
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return { orders: updatedOrders };
    });
  },
}));
