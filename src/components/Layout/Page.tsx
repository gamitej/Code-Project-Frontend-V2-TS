import React from "react";
import { Sidebar } from "..";

interface PageProps {
  children: React.ReactNode;
  enableSidebar?: boolean;
  loading?: boolean;
  error?: Error | null;
}

const Page = ({
  children,
  enableSidebar = false,
  loading = false,
  error,
}: PageProps) => {
  if (loading) return <div className="text-white">loading...</div>;

  if (error) return <div className="text-white">Error occured</div>;

  /**
   * TSX
   */
  return (
    <div className="mt-5  mx-5 lg:mt-6">
      <Sidebar enableSidebar={enableSidebar} />
      <div className="h-full">{children}</div>
      <br />
    </div>
  );
};

export default Page;
