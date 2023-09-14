import { create } from "zustand";
import { colorSession } from "@/utils/nameMapping.json";
import { getSession, setSession } from "@/utils/session";

interface WindowDimensions {
  width: number;
  height: number;
}

interface GlobalState {
  darkMode: boolean;
  colorShades: string;
  globalSideBarEnable: boolean;
  windowDimensions: WindowDimensions;
  setWindowDimensions: (dimensions: WindowDimensions) => void;
  setColorShades: (color: string) => void;
  setGlobalSideBarEnable: (open: boolean) => void;
  setDarkMode: () => void;
}

export const useGlobal = create<GlobalState>((set) => ({
  darkMode: true,
  colorShades: getSession(colorSession) || "#e9c46a",
  windowDimensions: { width: window.innerWidth, height: window.innerHeight },
  globalSideBarEnable: false,
  setDarkMode: () => {
    set((state) => ({ ...state, darkMode: !state.darkMode }));
  },
  setWindowDimensions: (dimensions) => {
    set((state) => ({ ...state, windowDimensions: dimensions }));
  },
  setGlobalSideBarEnable: (open) => {
    set((state) => ({ ...state, globalSideBarEnable: open }));
  },
  setColorShades: (color) => {
    setSession(colorSession, color);
    set((state) => ({ ...state, colorShades: color }));
  },
}));
