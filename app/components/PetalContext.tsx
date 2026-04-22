"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type PetalContextType = {
  autumnMode: boolean;
  toggleAutumn: () => void;
};

const PetalContext = createContext<PetalContextType>({
  autumnMode: false,
  toggleAutumn: () => {},
});

export function PetalProvider({ children }: { children: ReactNode }) {
  const [autumnMode, setAutumnMode] = useState(false);
  return (
    <PetalContext.Provider value={{ autumnMode, toggleAutumn: () => setAutumnMode((v) => !v) }}>
      {children}
    </PetalContext.Provider>
  );
}

export function useAutumnMode() {
  return useContext(PetalContext);
}
