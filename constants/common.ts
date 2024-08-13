import { IconType } from "react-icons";
import {
  BiLogoAngular,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiReactquery, SiRedux } from "react-icons/si";

export const SOCIAL_LINKS = {
  github: "https://github.com/akmatoff",
  linkedin: "https://www.linkedin.com/in/akmatoff/",
  telegram: "https://t.me/azimoffs",
  email: "mailto:azim.akmatov1@gmail.com",
};

export interface IWorkExperience {
  period: string;
  title: string;
  company: string;
  companyLink?: string;
}

export interface ISkill {
  title: string;
  icon: IconType;
}

export const WORK_EXPERIENCE: IWorkExperience[] = [
  {
    period: "February 2022 - May 2022",
    title: "Front-end Developer Intern",
    company: "Appboxo",
    companyLink: "https://appboxo.com",
  },
  {
    period: "June 2022 - February 2024",
    title: "Junior Front-end developer",
    company: "Appboxo",
    companyLink: "https://appboxo.com",
  },
];

export const SKILLS: ISkill[] = [
  {
    title: "JavaScript",
    icon: BiLogoJavascript,
  },
  {
    title: "TypeScript",
    icon: BiLogoTypescript,
  },
  {
    title: "React",
    icon: BiLogoReact,
  },
  {
    title: "Next.js",
    icon: RiNextjsFill,
  },
  {
    title: "Angular",
    icon: BiLogoAngular,
  },
  {
    title: "Tanstack Query",
    icon: SiReactquery,
  },
  {
    title: "Redux Toolkit",
    icon: SiRedux,
  },
];
