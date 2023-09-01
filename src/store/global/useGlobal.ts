import { create } from "zustand";
import { colorSession } from "@/utils/nameMapping.json";
import { getSession, setSession } from "@/utils/session";

interface GlobalState {
  colorShades: string;
  setColorShades: (color: string) => void;
}

export const useGlobal = create<GlobalState>((set) => ({
  colorShades: getSession(colorSession) || "#e9c46a",
  setColorShades: (color) => {
    setSession(colorSession, color);
    set((state) => ({ ...state, colorShades: color }));
  },
}));
