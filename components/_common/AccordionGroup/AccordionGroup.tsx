import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import arrowDown from "/public/icons/arrowDown.svg";

interface AccordionItemProps {
  title: string;
  text: string;
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
        <p
          ref={contentRef}
          style={
            open
              ? { maxHeight: `${maxH + 8}px`, paddingTop: "8px" }
              : { maxHeight: 0, paddingTop: 0 }
          }
          className={`transition-all overflow-hidden pl-[38px]`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
