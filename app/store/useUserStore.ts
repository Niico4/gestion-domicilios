import { create } from 'zustand';

import { Rol } from '../interfaces/users/user';

type UserStore = {
  user: {
    name: string;
    lastName: string;
    email: string;
    rol: Rol;
  } | null;
  setUser: (user: UserStore['user']) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
