import { create } from "zustand";
// services
import { LoginApi, SignUpApi } from "@/services";
// libs
import { toast } from "react-hot-toast";
// utils
import {
  getSession,
  getSessionInfoBool,
  removeSession,
  setSession,
} from "@/utils/session";
import { userSession } from "@/utils/nameMapping.json";

interface UserInfo {
  id: string;
  name: string;
  token: string;
}

interface AuthState {
  isLoggedIn: boolean;
  userInfo: UserInfo;
  isLoading: boolean;
  handleLogout: () => void;
  handleLogin: (data: object) => void;
  handleSignUp: (data: object) => void;
}

export const useAuth = create<AuthState>((set) => ({
  // variables
  isLoggedIn: getSessionInfoBool(userSession) || false,
  userInfo: getSession(userSession) || {},
  isLoading: false,
  // logout
  handleLogout: () => {
    removeSession(userSession);
    set((state) => ({
      ...state,
      isLoggedIn: false,
      userInfo: { id: "", name: "", token: "" },
    }));
  },
  // login
  handleLogin: async (req) => {
    set((state) => ({ ...state, isLoading: true }));
    const { message, error, data } = await LoginApi(req);
    if (!error) {
      set((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userInfo: data,
      }));
      // setting session data
      setSession(userSession, data);
    } else {
      toast.error(message, { duration: 1200 });
      set((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
      }));
    }
  },
  // sign-up
  handleSignUp: async (req) => {
    set((state) => ({ ...state, isLoading: true }));
    const { message, error } = await SignUpApi(req);
    if (!error) {
      set((state) => ({
        ...state,
        isLoading: false,
      }));
      toast.success(message, { duration: 1200 });
    } else {
      toast.error(message, { duration: 1200 });
      set((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
      }));
    }
  },
}));
