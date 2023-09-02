// comp
import {
  InputFieldPassword,
  InputTextField,
  LoadingButton,
} from "@/components";
import Footer from "./Footer";
// type
import { LoginProps } from "@/types/pages";

const Login = ({
  onChange,
  isLoading,
  inputForm,
  switchAuth,
  handleAuthSwitch,
}: LoginProps) => {
  return (
    <>
      {/* login body */}
      <div className="flex flex-col items-center w-full justify-evenly gap-y-[1.5rem]">
        <InputTextField
          width="75%"
          name="username"
          onChange={onChange}
          placeholder="Enter username"
          value={inputForm.username || ""}
        />
        <InputFieldPassword
          width="75%"
          name="password"
          onChange={onChange}
          placeholder="Enter password"
          value={inputForm.password || ""}
        />
      </div>
      {/* footer */}
      <div className="mb-[1rem] w-full text-center">
        <LoadingButton isLoading={isLoading} label="Login" />
      </div>
      <Footer handleAuthSwitch={handleAuthSwitch} switchAuth={switchAuth} />
    </>
  );
};

export default Login;
