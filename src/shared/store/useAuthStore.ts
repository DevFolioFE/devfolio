import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  setAuth: (uid: string, token: string) => void;
  clearToken: () => void;
  uid: string | null;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      uid: null,
      token: null,
      setAuth: (uid, token) => set(() => ({ uid, token })),
      clearToken: () => set(() => ({ token: null })),
    }),
    {
      name: "auth-storage",
    },
  ),
);
