// ============= App.ts ===============

export type AppAuth = {
  isLoggedIn: boolean;
};

// ============== AUTH =============

// auth
export interface AuthProps {
  isLoggedIn: boolean;
}

export interface AuthInputForm {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

export interface LoginProps {
  inputForm: AuthInputForm;
  handleAuthSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
  switchAuth: boolean;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
