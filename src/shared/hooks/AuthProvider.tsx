"use client";

import { ReactNode } from "react";
import { useAuthListener } from "./useAuthListener";

export function AuthProvider({ children }: { children: ReactNode }) {
  useAuthListener();
  return <>{children}</>;
}
