import React from "react";

interface sideBarProps {
  enableSidebar: boolean;
}

const Sidebar = ({ enableSidebar }: sideBarProps) => {
  if (!enableSidebar) {
    return <React.Fragment />;
  }
  return <div>Sidebar</div>;
};

export default Sidebar;
