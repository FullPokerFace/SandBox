import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MediumHeading } from "../_common/MediumHeading";
import { SmallBlueHeading } from "../_common/SmallBlueHeading";
import whyUsImg from "/public/pics/whyus-1.png";
import arrowDown from "/public/icons/arrowDown.svg";

const accordions = [
  {
    defaultOpen: true,
    title: "Professional Design",
    text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
  },
  {
    title: "Top-Tier Support",
    text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
  },
  {
    title: "Header & Slider Options",
    text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
  },
];

export const WhyChooseUs = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-12 container mx-auto">
      <div className="w-full md:w-1/2">
        <Image src={whyUsImg} alt="Why Us Image" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <SmallBlueHeading>WHY CHOOSE US?</SmallBlueHeading>
        <MediumHeading className="mb-4">
          We bring solutions to make life easier.
        </MediumHeading>
        <AccordionGroup items={accordions} />
      </div>
    </div>
  );
};

interface AccordionItemProps {
  title: string;
  text: string;
  defaultOpen?: boolean;
}

interface AccordionGroupProps {
  items: AccordionItemProps[];
}

const AccordionGroup = (props: AccordionGroupProps) => {
  const { items } = props || {};

  return (
    <div className="space-y-4">
      {items &&
        items.length > 0 &&
        items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            text={item.text}
            defaultOpen={item?.defaultOpen}
          />
        ))}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = (
  props: AccordionItemProps
) => {
  const { title, text, defaultOpen = false } = props || {};

  const [open, setOpen] = useState(defaultOpen);
  const [maxH, setMaxH] = useState(0);

  const contentRef = useRef(null);

  const toggleShow = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef?.current) {
      setMaxH((contentRef.current as HTMLPreElement).scrollHeight || 0);
    }
  }, [contentRef]);

  useEffect(() => {
    if (!contentRef?.current) return;
    const preElement: HTMLPreElement = contentRef?.current;

    const changeMaxH = () => {
      setMaxH(preElement.scrollHeight || 0);
    };
    window.addEventListener("resize", changeMaxH);

    return () => {
      window.removeEventListener("resize", changeMaxH);
    };
  }, [contentRef]);

  return (
    <div className="flex gap-3 items-start">
      <button className="min-w-max flex" onClick={toggleShow}>
        <Image
          className={`transition-all  ${open ? "-rotate-180" : ""}`}
          width={25}
          height={25}
          alt="accordion arrow"
          src={arrowDown}
        />
      </button>
      <div>
        <p className="font-semibold">{title}</p>
        <p
          ref={contentRef}
          style={
            open
              ? { maxHeight: `${maxH + 8}px`, paddingTop: "8px" }
              : { maxHeight: 0, paddingTop: 0 }
          }
          className={`transition-all overflow-hidden `}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
