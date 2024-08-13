import React from "react";

import { SOCIAL_LINKS } from "@/constants/common";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";

function Socials() {
  return (
    <div className="flex md:flex-col gap-6 text-2xl text-muted-foreground">
      <a href={SOCIAL_LINKS.github} className="hover:text-primary duration-300">
        <LuGithub />
      </a>
      <a
        href={SOCIAL_LINKS.linkedin}
        className="hover:text-primary duration-300"
      >
        <LuLinkedin />
      </a>
      <a
        href={SOCIAL_LINKS.telegram}
        className="hover:text-primary duration-300"
      >
        <PiTelegramLogo />
      </a>
      <a href={SOCIAL_LINKS.email} className="hover:text-primary duration-300">
        <IoMailOutline />
      </a>
    </div>
  );
}

export default Socials;
