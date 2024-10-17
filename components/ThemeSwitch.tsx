"use client";

import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function ThemeSwitch() {
  const { setTheme, theme } = useTheme();

  return theme === "light" ? (
    <IoSunny
      className="cursor-pointer hover:text-foreground duration-300"
      onClick={() => setTheme("dark")}
    />
  ) : (
    <IoMoon
      className="cursor-pointer hover:text-foreground duration-300"
      onClick={() => setTheme("light")}
    />
  );
}
