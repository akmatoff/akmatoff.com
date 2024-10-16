"use client";

import React, { useMemo } from "react";

import Logo from "@/public/akmatoff-light.png";
import LogoDark from "@/public/akmatoff-dark.png";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme } = useTheme();

  return (
    <div className="flex w-full h-44 justify-between items-center p-4 md:px-40 md:py-2 top-0">
      <div className="flex items-center gap-12 uppercase text-sm font-semibold text-muted-foreground">
        <Link href="/">
          {theme === "dark" && (
            <Image src={Logo} height={96} alt="logo" loading="lazy" />
          )}

          {theme === "light" && (
            <Image src={LogoDark} height={96} alt="logo" loading="lazy" />
          )}
        </Link>

        <Link href="/about" className="hover:text-foreground duration-300">
          About
        </Link>

        <Link
          href="/Azim Akmatov.pdf"
          target="_blank"
          className="hover:text-foreground duration-300"
        >
          View resume
        </Link>
      </div>

      <div className="flex items-center gap-8 text-muted-foreground">
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Navbar;
