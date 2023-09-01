import React, { useState } from "react";
import Menu from "@mui/material/Menu";

interface MenuModalProps {
  children: React.ReactNode;
  component: React.ReactElement;
  horizontal?: "right" | "left" | "center";
}

function MenuModal({
  children,
  component,
  horizontal = "right",
}: MenuModalProps) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // event handlers
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * TSX
   */
  return (
    <React.Fragment>
      <div onClick={handleClick}>{children}</div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: { backgroundColor: "#4C585F" }, // Set the menu's background color to black
        }}
        transformOrigin={{ horizontal: horizontal, vertical: "top" }}
        anchorOrigin={{ horizontal: horizontal, vertical: "bottom" }}
      >
        {component}
      </Menu>
    </React.Fragment>
  );
}

export default MenuModal;
