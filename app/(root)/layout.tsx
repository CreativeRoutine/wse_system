"use client";
// import LeftSidebar from '@/components/shared/LeftSidebar'
// import RightSidebar from '@/components/shared/RightSidebar'
// import Navbar from '@/components/shared/navbar/Navbar'
// import { Toaster } from '@/components/ui/toaster'
import React from "react";
import Example from "@/components/application-ui/application-shells/sidebar/brand_sidebar_with_header";
import Navbar from "@/components/shared/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      {/* NAVBAR */}
      <Navbar />
      {/* LEFT SIDEBAR */}

      {children}

      {/* FOOTER */}
    </main>
  );
};

export default Layout;
