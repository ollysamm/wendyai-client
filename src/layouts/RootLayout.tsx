import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
      <main className="flex bg-hol-grey-light h-screen">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </main>
  );
}

export default RootLayout;