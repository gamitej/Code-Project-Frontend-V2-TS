import React, { useEffect, useState } from "react";
import { FullScreenLoader, Sidebar } from "..";

interface PageProps {
  children: React.ReactNode;
  loading?: boolean;
  error?: Error | null | undefined;
  clsName?: string;
}

const Page = ({ children, loading = false, error, clsName }: PageProps) => {
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

  if (loading) return <FullScreenLoader />;

  if (error) return <div className="text-white">Error occured</div>;

  /**
   * TSX
   */
  return (
    <div
      className={`PAGE__TRANSITION ${clsName} ${
        animate ? "animate" : ""
      }  mt-5 mx-5 lg:mt-6 h-full`}
    >
      <Sidebar />
      <div className={`h-full m-auto`}>
        {children}
        <br />
        <br />d
      </div>
    </div>
  );
};

export default Page;
