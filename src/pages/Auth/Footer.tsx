type FooterProps = {
  handleAuthSwitch: (event: React.MouseEvent<HTMLButtonElement>) => void;
  switchAuth: Boolean;
};

const Footer = ({ handleAuthSwitch, switchAuth = true }: FooterProps) => {
  return (
    <div className="mb-[3rem]">
      <span className="text-white">
        {switchAuth ? "Not Registered ? " : "Registered ? "}
      </span>
      <span
        className="text-red-400 font-semibold cursor-pointer hover:text-blue-400 capitalize"
        onClick={handleAuthSwitch}
      >
        {switchAuth ? "sign up" : "login"}
      </span>{" "}
    </div>
  );
};

export default Footer;
