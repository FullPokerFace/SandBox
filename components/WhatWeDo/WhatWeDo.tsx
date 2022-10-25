import Image from "next/image";
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
    <div className="text-blue-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
        <path
          className=" text-blue-50"
          fill="currentColor"
          d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
        ></path>
      </svg>
      <div className="bg-blue-50 flex flex-col gap-s">
        <div className="container mx-auto">
          <p className="text-sky-600 text-center mb-4">WHAT WE DO?</p>
          <h2 className="text-zinc-800 text-xl lg:text-4xl font-semibold max-w-xl text-center mx-auto">
            The service we offer is specifically designed to meet your needs.
          </h2>
          <div className="mt-8 text-zinc-800 text-center px-4 flex flex-col gap-16 sm:flex-row">
            {services &&
              services.length > 0 &&
              services.map((service, index) => (
                <div key={index} className="space-y-4">
                  <Image src={service.img} alt="services" />
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p>{service.text}</p>
                  <a
                    href={service.text}
                    className="text-blue-400 inline-block mt-4 relative learn-more"
                  >
                    Learn More
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
