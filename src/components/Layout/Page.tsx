import React from "react";

interface PageProps {
  children: React.ReactElement;
  enableSidebar?: boolean;
}

const Page = ({ children }: PageProps) => {
  return (
    <div>
      <div>sidebar</div>
      <div className="h-full">{children}</div>
    </div>
  );
};

export default Page;
