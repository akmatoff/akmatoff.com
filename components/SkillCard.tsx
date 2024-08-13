import { ISkill } from "@/constants/common";
import React from "react";

interface Props {
  skill: ISkill;
}

function SkillCard(props: Props) {
  const { skill } = props;

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-secondary opacity-50 hover:opacity-100 duration-500 leading-normal">
      <skill.icon className="text-3xl" />
      {skill.title}
    </div>
  );
}

export default SkillCard;
