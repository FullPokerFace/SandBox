import Image from "next/image";
import React from "react";
import { BlueBadge } from "../BlueBadge/BlueBadge";
import { AnimatedCounter } from "../_common/AnimatedCounter";
import { MediumHeading } from "../_common/MediumHeading";
import { SmallBlueHeading } from "../_common/SmallBlueHeading";

export const CompanyFacts = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row p-4 gap-10">
      <div className="flex-1 md:w-2/6 text-center md:text-left">
        <SmallBlueHeading>COMPANY FACTS</SmallBlueHeading>
        <MediumHeading>We are proud of our design team</MediumHeading>
        <p>
          Just sit back and relax while we take care of your business needs for
          you.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 justify-between flex-1">
        {facts &&
          facts.length > 0 &&
          facts.map((fact, index) => (
            <div key={index} className="flex flex-col items-center my-8 gap-2">
              <BlueBadge>{fact.icon}</BlueBadge>
              <MediumHeading className="text-5xl text-center">
                <AnimatedCounter from={0} to={fact.count} />+
              </MediumHeading>
              <p className="text-center">{fact.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

const awardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const personIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
    />
  </svg>
);

const presentationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
    />
  </svg>
);

const facts = [
  { icon: presentationIcon, count: 1000, text: "Completed Projects" },
  { icon: personIcon, count: 50, text: "Happy Customers" },
  { icon: awardIcon, count: 20, text: "Awards Won" },
];
