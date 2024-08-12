import { IWorkExperience } from "@/constants/common";
import React from "react";

interface Props {
  data: IWorkExperience;
}

function WorkExperienceCard(props: Props) {
  const { data } = props;

  return (
    <div className="flex w-full justify-between gap-6 hover:text-white duration-300">
      <div>{data.period}</div>
      <div className="flex flex-col">
        <div>{data.title}</div>
        <p>
          <a href={data.companyLink} className="text-white">
            {data.company}
          </a>
        </p>
      </div>
    </div>
  );
}

export default WorkExperienceCard;
