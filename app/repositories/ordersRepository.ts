import { Order } from '../interfaces/orders/order';
import { generateClientID, generateOrderID } from '../utils/generateID';
import { mockOrders } from '../mock/ordersMock';

const loadOrdersFromLocalStorage = (): Order[] => {
  const storedOrders = localStorage.getItem('orders');
  return storedOrders ? JSON.parse(storedOrders) : [];
};

const saveOrdersToLocalStorage = (orders: Order[]): void => {
  localStorage.setItem('orders', JSON.stringify(orders));
};

export const OrdersRepository = {
  getOrders: async (): Promise<Order[]> => {
    const localOrders = loadOrdersFromLocalStorage();

    if (localOrders.length === 0) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockOrders);
        }, 500);
      });
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(localOrders);
      }, 500);
    });
  },

  createOrder: async (order: Order): Promise<Order> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newOrder = {
          ...order,
          id: generateOrderID(),
          client: { ...order.client, id: generateClientID() },
        };
        const updatedOrders = [...loadOrdersFromLocalStorage(), newOrder];
        saveOrdersToLocalStorage(updatedOrders);
        resolve(newOrder);
      }, 500);
    });
  },

  updateOrder: async (order: Order): Promise<Order> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedOrders = loadOrdersFromLocalStorage();
        const updatedOrders = storedOrders.map((item) =>
          item.id === order.id ? order : item,
        );
        saveOrdersToLocalStorage(updatedOrders);
        resolve(order);
      }, 500);
    });
  },

  deleteOrder: async (orderId: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedOrders = loadOrdersFromLocalStorage();
        const updatedOrders = storedOrders.filter(
          (item) => item.id !== orderId,
        );
        saveOrdersToLocalStorage(updatedOrders);
        resolve();
      }, 500);
    });
  },
};
