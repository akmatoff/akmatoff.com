import React from "react";
import Reveal from "./Reveal";
import { SKILLS } from "@/constants/common";
import SkillCard from "./SkillCard";

interface Props {}

function SkillsSection(props: Props) {
  const {} = props;

  return (
    <Reveal>
      <div className="flex flex-col gap-4">
        <h2>My technology stack</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-muted-foreground">
          {SKILLS.map((skill, index) => (
            <SkillCard skill={skill} key={index} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default SkillsSection;
