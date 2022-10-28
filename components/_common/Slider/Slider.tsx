import Image, { StaticImageData } from "next/image";
import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { MediumHeading } from "../MediumHeading";

interface SlideProps {
  title: string;
  type: string;
  img: StaticImageData;
}

interface ControlButtonsProps {
  onPrev: MouseEventHandler<HTMLButtonElement>;
  onNext: MouseEventHandler<HTMLButtonElement>;
}

interface SliderProps {
  slides: SlideProps[];
}

export const Slider: FC<SliderProps> = (props: SliderProps) => {
  const { slides } = props || {};

  const [index, setIndex] = useState(0);

  const containerDiv = useRef(null);

  const handlePrev = () => {
    const newIndex = index - 1;
    if (newIndex < 0) setIndex(slides.length - 1);
    else setIndex(newIndex);
  };
  const handleNext = () => {
    const newIndex = index + 1;
    if (newIndex > slides.length - 1) setIndex(0);
    else setIndex(newIndex);
  };

  useEffect(() => {
    if (containerDiv?.current) {
      (containerDiv?.current as HTMLDivElement)
        .querySelectorAll("div")
        ?.[index].scrollIntoView({
          behavior: "smooth",
        });
    }
  }, [index]);

  return (
    <div className="space-y-5 text-center max-w-2xl mx-auto">
      <div className="flex overflow-x-hidden pb-3" ref={containerDiv}>
        {slides &&
          slides?.length > 0 &&
          slides.map((slide, index) => (
            <Slide
              key={"slide" + index}
              title={slide.title}
              type={slide.type}
              img={slide.img}
            />
          ))}
      </div>
      <div className="flex gap-2 justify-center flex-wrap">
        {slides &&
          slides?.length > 0 &&
          slides.map((slide, i) => (
            <span
              key={"slideIndex" + i}
              className={`h-3 w-3 ${
                index === i ? "bg-blue-500" : "bg-sky-300"
              } block rounded-full`}
            ></span>
          ))}
      </div>
      <ControlButtons onNext={handleNext} onPrev={handlePrev} />
    </div>
  );
};

const Slide: FC<SlideProps> = (props: SlideProps) => {
  const { title, type, img } = props || {};
  return (
    <div className="min-w-full space-y-4">
      <Image alt={title} src={img} className="rounded-xl" />
      <MediumHeading>{title}</MediumHeading>
      <p>{type.toUpperCase()}</p>
    </div>
  );
};
const ControlButtons: FC<ControlButtonsProps> = (
  props: ControlButtonsProps
) => {
  const { onPrev, onNext } = props || {};
  return (
    <div>
      <button onClick={onPrev}>{arrowLeft}</button>
      <button onClick={onNext}>{arrowRight}</button>
    </div>
  );
};

const arrowLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-16 h-16 text-blue-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const arrowRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-16 h-16 text-blue-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
