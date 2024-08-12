import { SOCIAL_LINKS } from "@/constants/common";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";

function Socials() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-6">
        <h2>Contacts</h2>
        <a
          href="/Azim Akmatov.pdf"
          download
          className="underline text-muted-foreground hover:text-white duration-300"
        >
          Download my resume
        </a>
      </div>
      <div className="flex gap-5 text-2xl text-muted-foreground">
        <a href={SOCIAL_LINKS.github} className="hover:text-white duration-300">
          <IoLogoGithub />
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          className="hover:text-white duration-300"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href={SOCIAL_LINKS.telegram}
          className="hover:text-white duration-300"
        >
          <BsTelegram />
        </a>
        <a href={SOCIAL_LINKS.email} className="hover:text-white duration-300">
          <IoMdMail />
        </a>
      </div>
    </section>
  );
}

export default Socials;
