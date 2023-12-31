// comp
import {
  InputFieldPassword,
  InputTextField,
  LoadingButton,
} from "@/components";
// utils
import Footer from "./Footer";
import { LoginProps } from "@/types/pages";

const SignUp = ({
  isLoading,
  onChange,
  inputForm,
  handleAuthSwitch,
  switchAuth,
}: LoginProps) => {
  return (
    <>
      {/* login body */}
      <div className="flex flex-col items-center w-full  gap-y-[1rem] justify-evenly">
        <InputTextField
          width="75%"
          onChange={onChange}
          placeholder="Enter username"
          name="username"
          value={inputForm.username || ""}
        />
        <InputFieldPassword
          width="75%"
          name="password"
          placeholder="Enter password"
          value={inputForm.password || ""}
          onChange={onChange}
        />
      </div>
      {/* footer */}
      <div className="mb-[1rem] w-full text-center">
        <LoadingButton isLoading={isLoading} label="SignUp" />
      </div>
      <Footer handleAuthSwitch={handleAuthSwitch} switchAuth={switchAuth} />
    </>
  );
};

export default SignUp;
