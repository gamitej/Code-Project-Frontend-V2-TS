import { create } from "zustand";
import { colorSession } from "@/utils/nameMapping.json";
import { getSession, setSession } from "@/utils/session";

interface WindowDimensions {
  width: number;
  height: number;
}

interface GlobalState {
  colorShades: string;
  globalSideBarEnable: boolean;
  windowDimensions: WindowDimensions;
  setWindowDimensions: (dimensions: WindowDimensions) => void;
  setColorShades: (color: string) => void;
  setGlobalSideBarEnable: (open: boolean) => void;
}

export const useGlobal = create<GlobalState>((set) => ({
  colorShades: getSession(colorSession) || "#e9c46a",
  windowDimensions: { width: window.innerWidth, height: window.innerHeight },
  globalSideBarEnable: false,
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
