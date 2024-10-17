import React from "react";

import { SOCIAL_LINKS } from "@/constants/common";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import Link from "next/link";

function Socials() {
  return (
    <div className="flex flex-col gap-8 text-[1.6rem] text-muted-foreground">
      <Link
        href={SOCIAL_LINKS.github}
        target="_blank"
        className="hover:text-primary duration-300"
      >
        <LuGithub />
      </Link>
      <Link
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        className="hover:text-primary duration-300"
      >
        <LuLinkedin />
      </Link>
      <Link
        href={SOCIAL_LINKS.telegram}
        target="_blank"
        className="hover:text-primary duration-300"
      >
        <PiTelegramLogo />
      </Link>
      <Link
        href={SOCIAL_LINKS.email}
        target="_blank"
        className="hover:text-primary duration-300"
      >
        <IoMailOutline />
      </Link>
    </div>
  );
}

export default Socials;
