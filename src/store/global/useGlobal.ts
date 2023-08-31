import { create } from "zustand";

interface GlobalState {
  colorShades: string;
  setColorShades: (color: string) => void;
}

export const useGlobal = create<GlobalState>((set) => ({
  colorShades: "#ea9ab2",
  setColorShades: (color) => {
    set((state) => ({ ...state, colorShades: color }));
  },
}));
