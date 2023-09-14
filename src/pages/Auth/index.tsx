import { useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
// comp
import Login from "./Login";
// utils
import SignUp from "./SignUp";
import { useAuth } from "@/store/auth/useAuth";
import { AuthInputForm, AppAuth } from "@/types/pages";
import { useGlobal } from "@/store/global/useGlobal";

const Auth = ({ isLoggedIn, navbarHeight }: AppAuth) => {
  const { colorShades, darkMode } = useGlobal();
  const { handleLogin, handleSignUp, isLoading } = useAuth();
  const [inputForm, setInputForm] = useState<AuthInputForm>({});
  const [switchAuth, setSwitchAuth] = useState<boolean>(true);

  // ================== EVENT HANDLERS START ====================
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (switchAuth) {
      handleLogin(inputForm);
    } else {
      handleSignUp(inputForm);
    }
  };

  const handleAuthSwitch = () => {
    setSwitchAuth((prev) => !prev);
  };

  // ================== EVENT HANDLERS END ====================

  useMemo(() => setInputForm({}), [isLoggedIn]);

  // ====  if user is logged in ======
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  /**
   * JSX
   */

  return (
    <div
      className={`flex w-[95%] m-auto justify-center items-center`}
      style={{
        height: `calc(100vh - ${navbarHeight}rem)`,
      }}
    >
      <form
        onSubmit={handleFormSubmit}
        className="w-[30rem] rounded-lg flex flex-col items-center gap-y-[1.5rem] shadow-lg dark:bg-darkCard border border-zinc-400"
        style={{
          boxShadow: darkMode
            ? `1px 1px 2px 0 ${colorShades}`
            : `4px 4px 2px 2px ${colorShades}`,
        }}
      >
        {/* ==== HEAD ==== */}
        <div className="mt-[2rem] mb-[1rem]">
          <h3 className="dark:text-white text-darkText text-2xl font-semibold flex justify-center items-center mt-3 gap-x-3">
            Code
          </h3>
        </div>

        {switchAuth ? (
          <Login
            inputForm={inputForm}
            switchAuth={switchAuth}
            onChange={handleInputChange}
            handleAuthSwitch={handleAuthSwitch}
            isLoading={isLoading}
          />
        ) : (
          <SignUp
            inputForm={inputForm}
            switchAuth={switchAuth}
            onChange={handleInputChange}
            handleAuthSwitch={handleAuthSwitch}
            isLoading={isLoading}
          />
        )}
      </form>
    </div>
  );
};

export default Auth;
