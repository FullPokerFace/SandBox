import { FC, useState } from "react";
import { Logo } from "../_common/Logo";

interface Props {
  items: any[];
}

export const MobileMenu: FC<Props> = (props) => {
  const { items } = props || {};
  const [open, setOpen] = useState(true);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)} className="flex">
        {menuSVG}
      </button>
      {open && (
        <div className="fixed left-0 top-0 right-0 bottom-0">
          <div
            onClick={() => setOpen(false)}
            className="absolute bg-slate-900 w-full h-full animate-fadeOut opacity-60"
          ></div>
          <div className="absolute bg-slate-900 w-full h-full animate-slideFromLeft max-w-sm p-6">
            <span className="flex mb-8">
              <a href="#" className="flex-1">
                <Logo theme="light" />
              </a>
              <button onClick={() => setOpen(false)}>{closeSVG}</button>
            </span>
            {items &&
              items.length > 0 &&
              items.map(({ label, submenus }, index) => (
                <MenuItem
                  key={"menu" + index}
                  label={label}
                  submenus={submenus}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface MenuItemProps {
  label: string;
  submenus: any[];
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { label, submenus } = props || {};
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full text-white justify-between items-center pr-2"
      >
        {label}
        {arrowDownSVG}
      </button>
      {open && (
        <div className="flex flex-col origin-top-left animate-zoomOut ">
          {submenus &&
            submenus.length > 0 &&
            submenus.map((item: any, index: number) => (
              <a
                key={"submenu" + index}
                href={item.href}
                className="pl-4 text-sm text-white py-2"
              >
                {item.label}
              </a>
            ))}
        </div>
      )}
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
    className="w-3 h-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);
