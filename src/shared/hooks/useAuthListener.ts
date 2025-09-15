"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api";
import { useAuthStore } from "@/shared/store";

export function useAuthListener() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const clearToken = useAuthStore((state) => state.clearToken);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        clearToken();
      }
    });

    return () => unsubscribe();
  }, [setAuth, clearToken]);
}
