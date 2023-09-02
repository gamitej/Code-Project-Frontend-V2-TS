import { create } from "zustand";
import { colorSession } from "@/utils/nameMapping.json";
import { getSession, setSession } from "@/utils/session";

interface GlobalState {
  colorShades: string;
  globalSideBarEnable: boolean;
  setColorShades: (color: string) => void;
  setGlobalSideBarEnable: (open: boolean) => void;
}

export const useGlobal = create<GlobalState>((set) => ({
  colorShades: getSession(colorSession) || "#e9c46a",
  globalSideBarEnable: false,
  setGlobalSideBarEnable: (open) => {
    set((state) => ({ ...state, globalSideBarEnable: open }));
  },
  setColorShades: (color) => {
    setSession(colorSession, color);
    set((state) => ({ ...state, colorShades: color }));
  },
}));
