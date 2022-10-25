import Image from "next/image";
import { Ref, useEffect, useRef, useState } from "react";
import arrowDown from "/public/icons/arrowDown.svg";
import arrowRight from "/public/icons/arrowRight.svg";

interface Props {
  menu: any;
}

export const Menu = (props: Props) => {
  const { menu } = props || {};

  const [show, setShow] = useState(false);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: Event) {
        const { current } = ref || {};
        if (current && !current.contains(event.target)) {
          setShow(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mouseover", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mouseover", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef<HTMLAnchorElement>(null);
  useOutsideAlerter(wrapperRef);

  return (
    <a
      key={`menu_${menu.label}`}
      className={`transition-all flex items-center hover:text-sky-400 cursor-pointer gap-1 text-sm select-none ${
        menu.submenus ? "relative" : ""
      }`}
      onMouseOver={(e) => setShow(true)}
      ref={wrapperRef}
    >
      {menu.label} <Image width={15} src={arrowDown} alt="menu options" />{" "}
      {show && menu.images && <ImageMenu items={menu.images} />}
      {show && menu.submenus && <TextMenu items={menu.submenus} />}
    </a>
  );
};

interface ImageMenuProps {
  items: any;
}

const ImageMenu = (props: ImageMenuProps) => {
  const { items } = props || {};
  return (
    <div className="absolute pt-5 left-0 right-0 top-[32px] animate-menuShow ">
      <div className="flex w-full p-5 rounded-lg bg-zinc-800 gap-5 justify-between">
        {items.length > 0 &&
          items.map((img: any, index: number) => (
            <a href={img.href} key={index}>
              <Image
                src={img.src}
                alt="Website Thumbnail"
                className="transition-all hover:scale-105"
              />
            </a>
          ))}
      </div>
    </div>
  );
};

interface TextMenuProps {
  items: any;
}

const TextMenu = (props: TextMenuProps) => {
  const { items } = props || {};
  return (
    <div className="absolute pt-5 left-0 top-full animate-menuShow ">
      <div className="flex flex-col w-full p-5 rounded-lg bg-zinc-50 gap-5 justify-between shadow-lg">
        {items.length > 0 &&
          items.map((submenu: any, index: number) => (
            <a
              className="flex justify-between min-w-max gap-5 items-center text-zinc-800 hover:text-sky-400"
              key={index}
              href={submenu.href}
            >
              {submenu.label}
              <Image src={arrowRight} width={10} alt="arrow to open menu" />
            </a>
          ))}
      </div>
    </div>
  );
};
