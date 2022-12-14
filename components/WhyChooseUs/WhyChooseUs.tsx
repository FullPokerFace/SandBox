import Image from "next/image";
import { AccordionGroup } from "../_common/AccordionGroup/AccordionGroup";
import { MediumHeading } from "../_common/MediumHeading";
import { SmallBlueHeading } from "../_common/SmallBlueHeading";
import whyUsImg from "/public/pics/whyus-1.png";

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
      <div className="w-full md:w-1/2 ">
        <Image src={whyUsImg} alt="Why Us Image" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center ">
        <SmallBlueHeading className="text-center md:text-left">
          WHY CHOOSE US?
        </SmallBlueHeading>
        <MediumHeading className="mb-4">
          We bring solutions to make life easier.
        </MediumHeading>
        <AccordionGroup items={accordions} />
      </div>
    </div>
  );
};
