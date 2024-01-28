import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAdminLoggedIn: false,
  login: () => set({ isAdminLoggedIn: true }),
  logout: () => set({ isAdminLoggedIn: false }),
}));

export default useAuthStore;
