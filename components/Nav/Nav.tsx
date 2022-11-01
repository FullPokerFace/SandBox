import React from "react";
import { Button } from "../_common/Button";
import { Menu } from "./Menu";
import { MobileMenu } from "./MobileMenu";
import pic1 from "/public/pics/websiteThumbs/1.jpg";
import pic2 from "/public/pics/websiteThumbs/2.jpg";
import pic3 from "/public/pics/websiteThumbs/3.jpg";
import pic4 from "/public/pics/websiteThumbs/4.jpg";
import pic5 from "/public/pics/websiteThumbs/5.jpg";
import pic6 from "/public/pics/websiteThumbs/6.jpg";
import { Logo } from "../_common/Logo";

const navMenu = [
  {
    label: "Projects",
    images: [
      { src: pic1, href: "#" },
      { src: pic2, href: "#" },
      { src: pic3, href: "#" },
      { src: pic4, href: "#" },
      { src: pic5, href: "#" },
      { src: pic6, href: "#" },
    ],
  },
  {
    label: "Documentation",
    submenus: [
      { label: "Getting Started", href: "#" },
      { label: "How To", href: "#" },
      { label: "Styles", href: "#" },
      { label: "Examples", href: "#" },
    ],
  },
];

export const Nav = () => {
  return (
    <div className="flex items-center gap-6 z-10 relative container m-auto mt-4 p-4">
      <span className="flex flex-1 items-center md:justify-start">
        <a href="#" className="flex-1">
          <Logo />
        </a>
        <MobileMenu items={navMenu} />
      </span>

      <div className="hidden gap-6 md:flex">
        {navMenu &&
          navMenu.length > 0 &&
          navMenu.map((menu: any, index: number) => (
            <Menu key={index} menu={menu} />
          ))}
      </div>
      <span className="hidden md:block">
        <Button label="Contact" />
      </span>
    </div>
  );
};
