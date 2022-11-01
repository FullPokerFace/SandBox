import Image from "next/image";
import { FC, useState } from "react";
import AnimatedHeightContainer from "../_common/AnimatedHeightContainer";
import { Logo } from "../_common/Logo";

interface Props {
  items: any[];
}

export const MobileMenu: FC<Props> = (props) => {
  const { items } = props || {};
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)} className="flex">
        {menuSVG}
      </button>
      {open && (
        <div className="fixed left-0 top-0 h-screen w-screen text-white">
          <div
            onClick={() => setOpen(false)}
            className="absolute bg-slate-900 w-full h-full animate-fadeOut opacity-60"
          ></div>
          <div className="fixed bg-slate-900 w-full h-screen animate-slideFromLeft max-w-sm p-6 overflow-y-scroll flex flex-col gap-8">
            <span className="flex ">
              <a href="#" className="flex-1">
                <Logo theme="light" />
              </a>
              <button className="min-w-fit" onClick={() => setOpen(false)}>
                {closeSVG}
              </button>
            </span>
            <div className="h-full">
              {items &&
                items.length > 0 &&
                items.map(({ label, submenus, images }, index) => (
                  <MenuItem
                    key={"menu" + index}
                    label={label}
                    submenus={submenus}
                    images={images}
                  />
                ))}
            </div>
            <div>
              <p>inquiry@sandbox.com</p>
              <p>+ 1 (347) 677-2699</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface MenuItemProps {
  label: string;
  submenus: any[];
  images: any[];
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { label, submenus, images } = props || {};
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full text-white justify-between items-center pr-2"
      >
        {label}
        <span className={`w-3 h-3 transition-all ${open ? "-rotate-180" : ""}`}>
          {arrowDownSVG}
        </span>
      </button>

      {/* Links */}
      <AnimatedHeightContainer
        open={open}
        className="flex flex-col pl-2 duration-200"
      >
        {" "}
        {submenus &&
          submenus.length > 0 &&
          submenus.map((item: any, index: number) => (
            <a
              key={"submenu" + index}
              href={item.href}
              className="text-sm text-white py-2"
            >
              {item.label}
            </a>
          ))}
      </AnimatedHeightContainer>

      {/* Images */}
      <AnimatedHeightContainer
        open={open}
        className="flex duration-200 flex-wrap"
      >
        {" "}
        {images &&
          images.length > 0 &&
          images.map((item: any, index: number) => (
            <a
              key={"submenu" + index}
              href={item.href}
              className="text-sm text-white p-2 w-1/2 "
            >
              <Image
                className="rounded-lg"
                src={item.src}
                alt={label + "img" + index}
              />
            </a>
          ))}
      </AnimatedHeightContainer>
    </div>
  );
};

const menuSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    />
  </svg>
);

const closeSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const arrowDownSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3.5}
    stroke="white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);
