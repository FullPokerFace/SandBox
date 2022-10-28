import React from "react";
import { AccordionGroup } from "../_common/AccordionGroup/AccordionGroup";
import { Button } from "../_common/Button";
import { MediumHeading } from "../_common/MediumHeading";
import { SmallBlueHeading } from "../_common/SmallBlueHeading";

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

export const FAQ = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 space-y-4 text-center md-text-left">
        <SmallBlueHeading className="text-center md:text-left">
          FAQ
        </SmallBlueHeading>
        <MediumHeading>
          {`If you don't see an answer to your question, you can send us an email
        from our contact form.`}
        </MediumHeading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare.
        </p>
        <Button label="View FAQ" />
      </div>
      <div className="w-full md:w-1/2">
        <AccordionGroup items={accordions} itemClassName="shadow-lg p-4" />
      </div>
    </div>
  );
};
