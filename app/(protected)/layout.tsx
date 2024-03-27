import React from "react";
import Navbar from "./_components/Navbar";

interface ProtectedLayoutprops {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutprops) => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
