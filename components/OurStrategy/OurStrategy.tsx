import React, { FC } from "react";
import { BlueBadge } from "../BlueBadge/BlueBadge";
import { Button } from "../_common/Button";
import { MediumHeading } from "../_common/MediumHeading";
import { SmallBlueHeading } from "../_common/SmallBlueHeading";

const cards = [
  {
    index: "01",
    title: "Collect Ideas",
    text: "Nulla vitae elit libero pharetra augue dapibus.",
  },
  {
    index: "02",
    title: "Analyze Data",
    text: "Create customer friendly reports.",
  },
  {
    index: "03",
    title: "Finalize Product",
    text: "Put a final touch on the end-user software.",
  },
];

export const OurStrategy = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-5 p-4">
      <div className="w-full md:flex-1">
        <SmallBlueHeading>OUR STRATEGY</SmallBlueHeading>
        <MediumHeading>
          Here are 3 working steps to organize our projects.
        </MediumHeading>
        <p className="my-4">
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id
          dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget
          urna mollis.
          <br />
          <br />
          Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
          ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
          consectetur.
        </p>
        <Button label="Learn More" />
      </div>
      <div className="w-full md:flex-1 md:max-w-lg flex flex-col gap-5 ">
        {cards &&
          cards &&
          cards.map((card, index) => (
            <Card
              key={`StartegyCard_${index}`}
              title={card.title}
              text={card.text}
              index={card.index}
              order={index}
            />
          ))}
      </div>
    </div>
  );
};

interface CardProps {
  title?: string;
  text?: string;
  index?: string;
  order?: number;
}

const Card: FC<CardProps> = (props: CardProps) => {
  const { index, title, text, order } = props || {};
  return (
    <div
      className={`bg-white shadow-lg rounded-md p-6 flex gap-4 md:w-11/12 transition-all hover:-translate-y-2 ${
        order && (order + 1) % 2 === 0 ? "md:self-end" : ""
      }`}
    >
      <div>
        <span
          className={`flex w-[48px] h-[48px] bg-blue-100 text-sky-500 font-semibold rounded-full items-center justify-center`}
        >
          <BlueBadge>{index}</BlueBadge>
        </span>
      </div>
      <div>
        <p className="font-semibold text-xl mb-2">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
