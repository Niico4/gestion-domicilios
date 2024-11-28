import { useEffect, useState } from 'react';

import { Order } from '@/app/interfaces/orders/order';

import { mockOrders } from '../mock/ordersMock';

export const useOrders = () => {
  const updateLocalStorage = (updatedOrders: Order[]) => {
    localStorage.setItem('domisys_orders', JSON.stringify(updatedOrders));
  };

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const storedOrders = localStorage.getItem('domisys_orders');
      return storedOrders ? JSON.parse(storedOrders) : mockOrders;
    } catch (e) {
      console.error('Error al leer de localStorage', e);
      return mockOrders;
    }
  });

  useEffect(() => {
    updateLocalStorage(orders);
  }, [orders]);

  const addOrder = (newOrder: Order) => {
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, newOrder];
      updateLocalStorage(updatedOrders);
      return updatedOrders;
    });
  };

  const editOrder = (updatedOrder: Order) => {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order,
      );
      updateLocalStorage(updatedOrders);
      return updatedOrders;
    });
  };

  const deleteOrder = (orderId: string) => {
    const confirmed = window.confirm('¿Estás seguro de eliminar esta orden?');
    if (!confirmed) return;

    setOrders((prevOrders) => {
      const updatedOrders = prevOrders.filter((order) => order.id !== orderId);
      updateLocalStorage(updatedOrders);
      return updatedOrders;
    });
  };

  return {
    orders,
    addOrder,
    editOrder,
    deleteOrder,
  };
};
