import MenuModal from "@/components/Modal/MenuModal";
import PortraitIcon from "@mui/icons-material/Portrait";

interface UserMenuCompProps {
  handleLogout: () => void;
}

interface UserMenuProps extends UserMenuCompProps {
  colorShades: string;
}

const UserMenu = (props: UserMenuProps) => {
  return (
    <div>
      <MenuModal component={<UserMenuComp {...props} />} horizontal="center">
        <PortraitIcon
          style={{
            color: props.colorShades,
            fontSize: "2rem",
            cursor: "pointer",
          }}
        />
      </MenuModal>
    </div>
  );
};

function UserMenuComp({ handleLogout }: UserMenuCompProps) {
  return (
    <div>
      <div
        onClick={handleLogout}
        className="font-semibold text-lg px-2 p-1 dark:text-white
      text-darkText cursor-pointer dark:hover:bg-slate-400 hover:bg-slate-200"
      >
        Logout
      </div>
    </div>
  );
}

export default UserMenu;
