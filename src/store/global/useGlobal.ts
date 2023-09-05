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
  setWindowDimensions: (prosp: WindowDimensions) => void;
  setColorShades: (color: string) => void;
  setGlobalSideBarEnable: (open: boolean) => void;
}

export const useGlobal = create<GlobalState>((set) => ({
  colorShades: getSession(colorSession) || "#e9c46a",
  windowDimensions: { width: 0, height: 0 },
  globalSideBarEnable: false,
  setWindowDimensions: () => {
    set((state) => ({ ...state }));
  },
  setGlobalSideBarEnable: (open) => {
    set((state) => ({ ...state, globalSideBarEnable: open }));
  },
  setColorShades: (color) => {
    setSession(colorSession, color);
    set((state) => ({ ...state, colorShades: color }));
  },
}));
