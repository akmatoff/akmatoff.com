import React from "react";
import Socials from "./Socials";

import Logo from "@/public/akmatoff-light.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex w-screen justify-between items-center fixed z-10 p-4 md:px-12 md:py-2 top-0 backdrop-blur-sm">
      <Link href="/">
        <Image src={Logo} height={92} alt="logo" />
      </Link>

      <div className="flex items-center gap-8 text-muted-foreground">
        <Link
          href="/Azim Akmatov.pdf"
          className="underline underline-offset-2 hover:text-foreground duration-300"
        >
          View resume
        </Link>

        <div className="hidden md:flex">
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
