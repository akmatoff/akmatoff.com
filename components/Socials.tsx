import React from "react";

import { SOCIAL_LINKS } from "@/constants/common";
import { IoMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { BsTelegram } from "react-icons/bs";

import Link from "next/link";

function Socials() {
  return (
    <div className="flex flex-col gap-8 text-[1.6rem] text-muted-foreground">
      <Link
        href={SOCIAL_LINKS.github}
        target="_blank"
        className="hover:text-primary duration-300"
      >
        <IoLogoGithub />
      </Link>
      <Link
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        className="hover:text-primary duration-300"
      >
        <IoLogoLinkedin />
      </Link>
      <Link
        href={SOCIAL_LINKS.telegram}
        target="_blank"
        className="hover:text-primary duration-300"
      >
        <BsTelegram />
      </Link>
      <Link
        href={SOCIAL_LINKS.email}
        target="_blank"
        className="hover:text-primary duration-300"
      >
        <IoMail />
      </Link>
    </div>
  );
}

export default Socials;
