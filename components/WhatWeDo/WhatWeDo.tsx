import Image from "next/image";
import { MediumHeading } from "../_common/MediumHeading";
import { SmallBlueHeading } from "../_common/SmallBlueHeading";
import serviceImg1 from "/public/pics/service-1.png";
import serviceImg2 from "/public/pics/service-2.png";
import serviceImg3 from "/public/pics/service-3.png";

const services = [
  {
    img: serviceImg1,
    title: "Web Design",
    text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.",
    href: "#",
  },
  {
    img: serviceImg2,
    title: "Graphic Design",
    text: "Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.",
    href: "#",
  },
  {
    img: serviceImg3,
    title: "3D Animation",
    text: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.",
    href: "#",
  },
];

export const WhatWeDo = () => {
  return (
    <div className="container mx-auto">
      <SmallBlueHeading className="text-center">WHAT WE DO?</SmallBlueHeading>
      <MediumHeading className="max-w-xl text-center mx-auto">
        The service we offer is specifically designed to meet your needs.
      </MediumHeading>
      <div className="mt-8 text-zinc-800 text-center px-4 flex flex-col gap-16 sm:flex-row">
        {services &&
          services.length > 0 &&
          services.map((service, index) => (
            <div key={index} className="space-y-4">
              <Image src={service.img} alt="services" />
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p>{service.text}</p>
              <a
                href={service.href}
                className="text-blue-400 inline-block mt-4 relative learn-more"
              >
                Learn More
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};
