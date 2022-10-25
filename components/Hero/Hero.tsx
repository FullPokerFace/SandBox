import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "../common/Button";
import heroImg from "/public/pics/hero-1.png";

const animatedText = ["web design", "3D animation", "mobile design"];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setIndex((prev) => {
        console.log("tick");
        const newIndex = prev + 1;
        if (newIndex > animatedText.length - 1) return 0;
        return newIndex;
      });
    }, 3000);
    return () => {
      clearInterval(textChangeInterval);
    };
  });

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 items-center px-10 container m-auto">
      <div className="w-full lg:w-1/2 text-3xl text-center lg:text-5xl lg:text-left py-6 font-semibold ">
        A digital agency specializing <br /> on{" "}
        <span
          key={index}
          className=" inline-block text-blue-400 animate-heroTextShow"
        >
          {animatedText[index]}
        </span>
        <p className="font-normal text-base lg:text-xl my-8">
          We are an award winning design agency that strongly believes in the
          power of creative ideas.
        </p>
        <Button label="Get Started" />
      </div>
      <div className="w-3/4 lg:w-1/2">
        <Image src={heroImg} alt="hero image" />
      </div>
    </div>
  );
};
