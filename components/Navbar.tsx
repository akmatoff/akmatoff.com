import React from "react";
import Socials from "./Socials";

import Logo from "@/public/akmatoff-light.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex w-screen justify-between items-center fixed z-10 p-4 md:px-12 md:py-2 top-0 bg-background">
      <Image src={Logo} height={92} alt="logo" />
      <Socials />
    </div>
  );
}

export default Navbar;
