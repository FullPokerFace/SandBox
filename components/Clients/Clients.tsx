import Image from "next/image";
import { useState } from "react";
import brand1 from "/public/pics/brands/1.png";
import brand2 from "/public/pics/brands/2.png";
import brand3 from "/public/pics/brands/3.png";
import brand4 from "/public/pics/brands/4.png";
import brand5 from "/public/pics/brands/5.png";
import arrowLeft from "/public/icons/arrowLeft.svg";
import arrowRight from "/public/icons/arrowRight.svg";

const brands = [brand1, brand2, brand3, brand4, brand5];

export default function Clients() {
  const [index, setIndex] = useState(0);

  const showNext = () => {
    const newIndex = index + 1;
    if (newIndex > brands.length - 1) setIndex(0);
    else {
      setIndex(newIndex);
    }
  };
  const showPrev = () => {
    const newIndex = index - 1;
    if (newIndex < 0) setIndex(brands.length - 1);
    else {
      setIndex(newIndex);
    }
  };
  return (
    <div className="container m-auto">
      <p className="text-sm text-center">
        Trusted by over 2K+ clients across the world
      </p>
      <div className="md:hidden my-4 flex gap-4 items-center justify-between min-h-[70px]">
        <Image
          onClick={showPrev}
          width={50}
          height={100}
          src={arrowLeft}
          alt="prev"
        />
        <Image
          key={index}
          src={brands[index]}
          alt="client"
          className="animate-heroTextShow"
        />
        <Image
          onClick={showNext}
          width={50}
          height={100}
          src={arrowRight}
          alt="next"
        />
      </div>
      <div className="hidden md:flex my-8 gap-20 xl:gap-40 items-center justify-between px-10">
        {brands &&
          brands.length > 0 &&
          brands.map((brand, index) => (
            <Image key={index} src={brand} alt="partner" />
          ))}
      </div>
    </div>
  );
}
