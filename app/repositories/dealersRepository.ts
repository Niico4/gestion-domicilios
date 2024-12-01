import { Dealer } from '../interfaces/users/dealer';
import { mockDealers } from '../mock/dealersMock';

const loadDealersFromLocalStorage = (): Dealer[] => {
  const storedDealers = localStorage.getItem('dealers');
  return storedDealers ? JSON.parse(storedDealers) : [];
};

const saveDealersToLocalStorage = (dealers: Dealer[]): void => {
  localStorage.setItem('dealers', JSON.stringify(dealers));
};

export const DealersRepository = {
  getDealers: async (): Promise<Dealer[]> => {
    const localDealers = loadDealersFromLocalStorage();

    if (localDealers.length === 0) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockDealers);
        }, 500);
      });
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(localDealers);
      }, 500);
    });
  },

  updateDealer: async (dealer: Dealer): Promise<Dealer> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedDealers = loadDealersFromLocalStorage();
        const updatedDealers = storedDealers.map((item) =>
          item.id === dealer.id ? dealer : item,
        );
        saveDealersToLocalStorage(updatedDealers);
        resolve(dealer);
      }, 500);
    });
  },

  deleteDealer: async (dealerId: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedDealers = loadDealersFromLocalStorage();
        const updatedDealers = storedDealers.filter(
          (item) => item.id !== dealerId,
        );
        saveDealersToLocalStorage(updatedDealers);
        resolve();
      }, 500);
    });
  },
};
