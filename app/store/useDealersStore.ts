import { create } from 'zustand';

import { DealersRepository } from '../repositories/dealersRepository';
import { Dealer } from '../interfaces/users/dealer';

type DealerStore = {
  dealers: Dealer[];
  isLoading: boolean;

  getDealers: () => Promise<void>;
  addDealer: (dealer: Dealer) => void;
  updateDealer: (dealer: Dealer) => void;
  deleteDealer: (dealerId: string) => void;
};

export const useDealerStorage = create<DealerStore>((set) => ({
  dealers: [],
  isLoading: false,

  getDealers: async () => {
    set({ isLoading: true });
    try {
      const dealers = await DealersRepository.getDealers();
      set({ dealers, isLoading: false });
      localStorage.setItem('dealers', JSON.stringify(dealers));
    } catch (error) {
      console.error('Error al obtener los dealers:', error);
      set({ isLoading: false });
    }
  },

  addDealer: (newDealer) => {
    set((state) => {
      const updatedDealers = [...state.dealers, newDealer];
      localStorage.setItem('dealers', JSON.stringify(updatedDealers));
      return { dealers: updatedDealers };
    });
  },

  updateDealer: (updatedDealer) => {
    set((state) => {
      const updatedDealers = state.dealers.map((dealer) =>
        dealer.id === updatedDealer.id ? updatedDealer : dealer,
      );
      localStorage.setItem('dealers', JSON.stringify(updatedDealers));
      return { dealers: updatedDealers };
    });
  },

  deleteDealer: (dealerId) => {
    set((state) => {
      const updatedDealers = state.dealers.filter(
        (dealer) => dealer.id !== dealerId,
      );
      localStorage.setItem('dealers', JSON.stringify(updatedDealers));
      return { dealers: updatedDealers };
    });
  },
}));
