// ============= App.ts ===============

export type AppAuth = {
  isLoggedIn: boolean;
  navbarHeight?: string;
};

// ============== AUTH =============

// auth
export interface AuthInputForm {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

// login-signup bottom footer
export type FooterProps = {
  handleAuthSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
  switchAuth: boolean;
};

// login - signup props
export interface LoginProps extends FooterProps {
  inputForm: AuthInputForm;
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
