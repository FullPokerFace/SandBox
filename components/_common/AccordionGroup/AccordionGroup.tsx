import Image from "next/image";
import { ReactNode, useState } from "react";
import AnimatedHeightContainer from "../AnimatedHeightContainer";
import arrowDown from "/public/icons/arrowDown.svg";

interface AccordionItemProps {
  title: string;
  text: string | ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

interface AccordionGroupProps {
  items: AccordionItemProps[];
  itemClassName?: string;
}

export const AccordionGroup = (props: AccordionGroupProps) => {
  const { items, itemClassName } = props || {};

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
            className={itemClassName}
          />
        ))}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = (
  props: AccordionItemProps
) => {
  const { title, text, defaultOpen = false, className } = props || {};

  const [open, setOpen] = useState(defaultOpen);

  const toggleShow = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <button className="flex gap-3 w-full items-center" onClick={toggleShow}>
        <p className="min-w-[25px]">
          <Image
            className={`transition-all  ${open ? "-rotate-180" : ""} `}
            width={25}
            height={25}
            alt="accordion arrow"
            src={arrowDown}
          />
        </p>
        <p className="font-semibold text-left">{title}</p>
      </button>
      <div>
        <AnimatedHeightContainer open={open} className="pl-[38px]">
          {text}
        </AnimatedHeightContainer>
      </div>
    </div>
  );
};
