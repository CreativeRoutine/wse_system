import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-24 p-2 bg-black text-white relative shadow-sm font-mono"
      role="navigation"
    >
      {/* LOGO */}
      <Link href="/" className="flex justify-start items-center p-3">
        <Image src="/images/logo.png" alt="logo" width={48} height={48} />
        <p className="pl-3">
          White Spider
          <br />
          Electronics
        </p>
      </Link>

      {/* Nav links */}
      <div className="flex flex-row max-md:hidden">
        <Link href="/" className="mr-8">
          <p className="">Home</p>
        </Link>
        <Link href="/techs" className="mr-8">
          <p className="">Users</p>
        </Link>
        <Link href="/dashboard" className="mr-8">
          <p className="">Dashboard</p>
        </Link>
        <Link href="/settings" className="mr-8">
          <p className="">Profile</p>
        </Link>
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
