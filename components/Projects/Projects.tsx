import React from "react";
import { MediumHeading } from "../_common/MediumHeading";
import { Slider } from "../_common/Slider/Slider";
import { SmallBlueHeading } from "../_common/SmallBlueHeading";

import pic1 from "/public/pics/projects/1.jpg";
import pic2 from "/public/pics/projects/2.jpg";
import pic3 from "/public/pics/projects/3.jpg";

const projects = [
  {
    title: "Expenses to Go",
    type: "Mobile design",
    img: pic1,
  },
  {
    title: "Point Bank",
    type: "Web Design",
    img: pic2,
  },
  {
    title: "WOW Magazine",
    type: "Stationary",
    img: pic3,
  },
];

export default function Projects() {
  return (
    <div className="container p-4 mx-auto text-center space-y-8">
      <SmallBlueHeading>LATEST PROJECTS</SmallBlueHeading>
      <MediumHeading className="max-w-xl mx-auto md:text-center">
        Check out some of our awesome projects with creative ideas and great
        design.
      </MediumHeading>
      <Slider slides={projects} />
    </div>
  );
}
