import React from "react";
import { Sidebar } from "..";

interface PageProps {
  children: React.ReactNode;
  enableSidebar?: boolean;
}

const Page = ({ children, enableSidebar = false }: PageProps) => {
  return (
    <div className="mt-5 mx-5 lg:mt-6">
      <Sidebar enableSidebar={enableSidebar} />
      <div className="h-full">{children}</div>
    </div>
  );
};

export default Page;
