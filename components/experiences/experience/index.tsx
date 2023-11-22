import { ExperineceType } from "@/types";
import React, { FC } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
type Props = {
  experience: ExperineceType;
};
export const Experience: FC<Props> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f3f4f6",
        boxShadow: "none",
        border: "1px solid rgba(0,0,0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
        visibility: "visible",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid  #9ca3af",
      }}
      iconStyle={{
        background: "#fff",
        color: "#000",
        visibility: "visible",
        fontSize: "1.5rem",
      }}
      date={experience.date}
      icon={experience.icon}
    >
      <h3 className="font-semibold capitalize vertical-timeline-element-title">
        {experience.title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        {experience.location}
      </h4>
      <p className="text-gray-700">{experience.description}</p>
    </VerticalTimelineElement>
  );
};
