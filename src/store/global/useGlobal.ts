import { create } from "zustand";

interface GlobalState {
  colorShades: string;
  setColorShades: (color: string) => void;
}

export const useGlobal = create<GlobalState>((set) => ({
  colorShades: "#e9c46a",
  setColorShades: (color) => {
    set((state) => ({ ...state, colorShades: color }));
  },
}));
