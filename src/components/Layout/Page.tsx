import React, { useEffect, useState } from "react";
import { Sidebar } from "..";

interface PageProps {
  children: React.ReactNode;
  enableSidebar?: boolean;
  loading?: boolean;
  error?: Error | null;
  clsName?: string;
}

const Page = ({
  children,
  enableSidebar = false,
  loading = false,
  error,
  clsName,
}: PageProps) => {
  const [animate, setAnimate] = useState<boolean>(true);

  // page transition animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (loading) return <div className="text-white">loading...</div>;

  if (error) return <div className="text-white">Error occured</div>;

  /**
   * TSX
   */
  return (
    <div
      className={`PAGE__TRANSITION ${clsName} ${
        animate ? "animate" : ""
      }  mt-5 mx-5 lg:mt-6`}
    >
      <Sidebar enableSidebar={enableSidebar} />
      <div className="h-full">
        {children}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Page;
