import React from "react";
import { Button } from "../_common/Button";
import { InputWithButton } from "../_common/InputWithButton";
import { Logo } from "../_common/Logo";
import { MediumHeading } from "../_common/MediumHeading";

export const Footer = () => {
  return (
    <div>
      {wave}
      <div className="bg-sky-900">
        <div className="container mx-auto p-4 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row items-center pb-6 border-b-2 border-sky-800">
            <MediumHeading className="text-white">
              Join our community by using our services and grow your business.
            </MediumHeading>
            <Button className="min-w-fit" label="Try it for free" />
          </div>
          <div className="flex flex-col text-white text-center md:flex-row md:flex-wrap md:text-left">
            <div className="space-y-3 w-full md:w-1/2 lg:w-1/4 text-white p-6">
              <span className="mx-auto inline-block">
                <Logo theme="light" />
              </span>
              <p>© 2022 Sandbox. All rights reserved.</p>
            </div>
            <div className="space-y-3 w-full md:w-1/2 lg:w-1/4 text-white p-6">
              <h3 className="text-4xl">Get in Touch</h3>
              <p>
                Moonshine St. 14/05 Light City,
                <br /> London, United Kingdom
              </p>
              <p>inquiry@sandbox.com</p>
              <p className="text-2xl">+ 1 (347) 677-2699</p>
            </div>
            <div className="space-y-3 w-full md:w-1/2 lg:w-1/4 text-white p-6 flex flex-col">
              <h3 className="text-4xl">Learn More</h3>
              <a href="#">About Us</a>
              <a href="#">Our story</a>
              <a href="#">ProjectsUs</a>
              <a href="#">Terms of use</a>
              <a href="#">Privacy policy</a>
            </div>
            <div className="space-y-3 w-full md:w-1/2 lg:w-1/4 text-white p-6">
              <h3 className="text-4xl">Our Newsletter</h3>
              <p>
                Subscribe to our newsletter to get our news & deals delivered to
                you.
              </p>
              <InputWithButton placeholder="Email address" buttonLabel="Join" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const wave = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
    <path
      className="text-sky-900"
      fill="currentColor"
      d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
    ></path>
  </svg>
);
