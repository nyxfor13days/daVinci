import create from "zustand";

type User = { id: string };

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
}));
